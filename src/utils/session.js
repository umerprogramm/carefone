import Cookies from 'js-cookie'

export const setSession = () => {
    // Cookies.set("card", JSON.stringify([{slug:"oppo-super-vooc"},{slug:"Airpods-pro"}]), { expires: 1 })
    const myData = Cookies.get('card')
    return myData
}

export const getSession = () => {
    const myData = Cookies.get('card');

    if (myData) {
      try {
        const parsedData = JSON.parse(myData);
        return parsedData
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log('Data not found in cookies.');
    }
   
    
    
    
    
    
    
}

export const removeSession = () => {
  Cookies.remove("card")
}
