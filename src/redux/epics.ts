import Config from 'react-native-config';
import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap } from 'rxjs/operators';
import { fetchPlacesRequest, fetchPlacesSuccess } from './places-slice';

const { BASE_URL } = Config;


export const fetchPlacesEpic = (action$: any) =>
  action$.pipe(
    ofType(fetchPlacesRequest.type),
    mergeMap(() =>
      ajax.getJSON(BASE_URL || 'https://freetestapi.com/api/v1/destinations').pipe(
        map((response: any) => fetchPlacesSuccess(response))
      )
    )
  );
