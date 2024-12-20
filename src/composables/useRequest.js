import axios from "axios";
import geturl from "./useBaseUrl";
import { ref } from "vue";
import { useNotification } from "@kyvg/vue3-notification";
const { notify }  = useNotification()
import { useUserStore } from '../stores/user'
import { isString } from "lodash";

const url = geturl()
   export async function useGetRequest(api){
    const userStore = useUserStore()
    const Data = ref(null)
    const Error = ref(null)
    try {
      const { data } = await axios.get(url+api,{
        headers: {
          "authorization": "Token "+userStore.userToken,
        }
      });
      Data.value = data
    } catch (error) {
        Error.value = error.response.data
    }
    return {Data,Error}
   }
   export async function useGetRequestPaginationFalse(api){
    const userStore = useUserStore()
    const Data = ref(null)
    const Error = ref(null)
    try {
      const { data } = await axios.get(url+api,{
        headers: {
          "authorization": "Token "+userStore.userToken,
          /* 'pagination': 2, */
        }
      });
      Data.value = data
    } catch (error) {
        Error.value = error.response.data
    }
    return {Data,Error}
   }

   export async function usePostRequest(api,body){
    const userStore = useUserStore()
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
     Data.value = data.data || data
      notify({
        title: data.message,
        type: 'success',
    });
    } catch (error) {
        Error.value = error.response.data
        notify({
          title: Error.value.message,
          text: isString(Error.value.errors) ? Error.value.errors : '',
          type: 'error',
      });
    }
    return {Data,Error}
   }
   export async function usePatchRequest(api,body){
    const userStore = useUserStore()
    const Data = ref(null)
    const Error = ref(null)
    try {
      const { data } = await axios.patch(url+api,body,{
        headers: {
          "authorization": "Token "+userStore.userToken
        }
      });
      Data.value = data
      notify({
        title: data.message,
        type: 'success',
    });
    } catch (error) {
        Error.value = error.response.data
        notify({
          title: Error.value.message,
          /* text: Error.value.errors, */
          type: 'error',
      });
    }
    return {Data,Error}
   }
   export async function useDeleteRequest(api){
    const userStore = useUserStore()
    const Data = ref(null)
    const Error = ref(null)
    try {
      const { data } = await axios.delete(url+api,{
        headers: {
          "authorization": "Token "+userStore.userToken
        }
      });
      Data.value = data
      notify({
        title: data.message,
        type: 'success',
    });
    } catch (error) {
        Error.value = error.response.data
    }
    return {Data,Error}
   }