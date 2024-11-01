import axios from "axios";
import geturl from "./useBaseUrl";
import { ref } from "vue";
import { useUserStore } from '../stores/user'

const userStore = useUserStore()
const url = geturl()
   export async function useGetRequest(api){
    const Data = ref(null)
    const Error = ref(null)
    try {
      const { data } = await axios.get(url+api,{
        headers: {
          "authorization": "Token "+userStore.userToken
        }
      });
      Data.value = data
    } catch (error) {
        Error.value = error.response.data
    }
    return {Data,Error}
   }

   export async function usePostRequest(api,body){
    const Data = ref(null)
    const Error = ref(null)
    try {
      const { data } = await axios.post(url+api,body,
        {
          headers: {
            "authorization": "Token "+userStore.userToken
          }
        } 
     );
     console.log(data)
      Data.value = data.data || data
    } catch (error) {
        Error.value = error.response.data
    }
    return {Data,Error}
   }
   export async function usePatchRequest(api,body){
    const Data = ref(null)
    const Error = ref(null)
    try {
      console.log("authorization"+ "Token "+userStore.userToken)
      const { data } = await axios.patch(url+api,body,{
        headers: {
          "authorization": "Token "+userStore.userToken
        }
      });
      Data.value = data
    } catch (error) {
        Error.value = error.response.data
    }
    return {Data,Error}
   }
   export async function useDeleteRequest(api){
    const Data = ref(null)
    const Error = ref(null)
    try {
      const { data } = await axios.delete(url+api,{
        headers: {
          "authorization": "Token "+userStore.userToken
        }
      });
      Data.value = data
    } catch (error) {
        Error.value = error.response.data
    }
    return {Data,Error}
   }