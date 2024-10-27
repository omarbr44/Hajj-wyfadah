import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userToken = ref(null)
  const userName = ref(null)  
  const userEmail = ref(null)  
  const userType = ref(null)  
  /* const userImg = ref(null)  
  const userPermissions = ref(null)  */ 
  function signIn(token,type,name,email) {
    userToken.value = token
    userName.value = name
    userEmail.value = email
    userType.value = type
    console.log(userToken.value,userName.value,userEmail.value,userType.value)
  }
  function signOut() {
    userToken.value = null;
    userName.value = null
    userEmail.value = null
    userType.value = null
  }
  return { userToken,userType,userName,userEmail,signIn,signOut }
},
{
  persist: true
})
