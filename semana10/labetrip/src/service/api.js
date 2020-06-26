import axios from 'axios';

export const apiCountry = axios.get('https://restcountries.eu/rest/v2/all');

export const api = axios.create({
    baseURL: 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/arturmagalhaes/',
});

export const getTrips = async () => {
  try{ 
    const response = await api.get('trips');
    return response.data.trips;
  } catch (error) {
      console.log(error);
  }
}

export const getTripDetail = async (id, config) => {
  //Problema
}

export const postCreateTrip = async (data, config) => {
  try{
    const response = await api.post('trips', data, config);
    return response;
  } catch (error){
    console.log(error);
  }
}

export const postApplyToTrip = async (id, data) => {
  console.log(id,data)
    try{
      const response = await api.post(`trips/${id}/apply`, data)
      return response;
    } catch(error) {
      console.log(error);
    }
}

export const postLogin = async (props) => {
  try{
    const response = await api.post('login', props);
    return response.data;
  } catch(error) {
    console.log(error);
  }
}

export const delDeleteTrip = async (props) => {
  try{
    const response = await api.delete(`trips/${props}`);
    return response;
  } catch(error) {
    console.log(error);
  }
}

export const putDecideCandidate = async (idViagem, idCandidato, data, config) => {
  //Problema
}
