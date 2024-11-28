import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userToken = ref(null)
  const userName = ref(null)  
  const userEmail = ref(null)  
  const userType = ref(null)  
  const userCompantId = ref(null)  
  /* const userImg = ref(null)  
  const userPermissions = ref(null)  */ 
  function signIn(token,type,name,email) {
    userToken.value = token
    userName.value = name
    userEmail.value = email
    userType.value = type
  }
  function setCompanyId(compnayId) {
    userCompantId.value = compnayId
  }
  function signOut() {
    userToken.value = null;
    userName.value = null
    userEmail.value = null
    userType.value = null
  }
  return { userToken,userType,userName,userEmail,userCompantId,signIn,signOut,setCompanyId }
},
{
  persist: true
})
