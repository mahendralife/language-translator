export const dropdownList =[ 'Mumbai' ,'Bangaluru' ,'Pune', 'Navsari', 'New Delhi']

export const getDropDown = (lng) =>{

    if(lng === 'en') {
        return [ 'Mumbai' ,'Bangaluru' ,'Pune', 'Navsari', 'New Delhi'];
    }

    else if(lng === 'it') {
        return [ 'Balrampur' ,'Bangaluru' ,'Pune', 'Navsari', 'New Delhi'];
    }
}
