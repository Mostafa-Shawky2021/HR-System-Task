import React from 'react'
const useForm = (validationInputOptions)=> {
    const [formData,setFormData] = React.useState({})
    const [errMsg,setErrorMsg] = React.useState({})
    const [formStatus,setFormStatus] = React.useState(false)

    
    const handleSubmit = (userSubmit) => (event)=> {
        event.preventDefault()
        // call callbackfunction which user passed
        // this wil triggered when user submit
        let formStatus = validateOnSubmit()
        userSubmit(formData,formStatus)
    
    }


    const handleChange = ( key ) => {
        console.log(key)
        if( typeof(key) === 'object' ) {
            // we pass dropdown data as object
            // key is represent the select option name
            // value is represent the value of the selected item
            let inputKey = Object.keys(key)[0]
            let inputValue = Object.values(key)[0]
            setFormData({...formData, [inputKey]:inputValue})
            validateOnChange(inputKey,inputValue)
            return 
        }
        // returned function will be the listener for on change event in inputs
        // js will call this event handler once user type on input
        return (event)=>{
            setFormData({...formData,[key]:event.target.value})
            validateOnChange(key,event.target.value)
        }   
    }
      
 
    const validateOnSubmit = ()=> {
        let errors = {}
        let validate = true
        // iterate form input name in validationoption
        
        Object.keys(validationInputOptions).map((inputName)=>{
            let required  = validationInputOptions[inputName].required 
            let minLength = validationInputOptions[inputName].minLength;
            let maxLength = validationInputOptions[inputName].maxLength;
            let pattern   = validationInputOptions[inputName].pattern;

            if( required?.validate && !formData[inputName]?.trim() ) {
                let errMsg = required?.errMsg ? required.errMsg : 'this input is required'
                errors = {...errors, [inputName]:errMsg}
                validate = false;

            }  else if(  minLength?.validate && formData[inputName]?.trim().length < minLength.value  ) {
                
                let errMsg = minLength.errMsg ? minLength.errMsg : `this input must be greater than ${minLength.value}`
                errors = {...errors, [inputName]:errMsg}
                validate = false;

    
            } else if( maxLength?.validate && !formData[inputName]?.trim().length > maxLength.value ) {
                let errMsg = maxLength.errMsg ? maxLength?.errMsg : `this input must be less than ${minLength.value}`
                errors = {...errors, [inputName]:errMsg}
                validate = false;

            } else if(  pattern?.validate && !formData[inputName].match(pattern.value)  ) {
                let errMsg = pattern?.errMsg ? pattern?.errMsg : 'sorry this not valid pattern'
                errors = {...errors, [inputName]:errMsg}
                validate = false;
            }  
           
        })
        if(!validate) {
            setErrorMsg(errors) 
        }
        return validate
      
     
    }
    // Input name paramater key to create object with the input name as a key
    const validateOnChange = (inputNameKey,value)=> {
    
        let requiredInputValidateRole = validationInputOptions[inputNameKey]; // will get reference of reuired validation of this input
        if( !requiredInputValidateRole )  {
            return 
        }
        let required  = requiredInputValidateRole?.required;
        let minLength = requiredInputValidateRole?.minLength;
        let maxLength = requiredInputValidateRole?.maxLength;
        let pattern   = requiredInputValidateRole?.pattern

    
        let errors = {}
        let valid = true
        
        if(  required?.validate && !value?.trim() ) {
            let errMsg = required?.errMsg ? required.errMsg : 'this input is required'
            errors[inputNameKey] = errMsg
            valid = false

        }  else if( minLength?.validate && value.trim().length < minLength.value ) {
        
            let errMsg = minLength?.errMsg ? minLength.errMsg : `this input must be greater than ${minLength.value}`
            errors[inputNameKey] = errMsg
            valid = false

        } else if( maxLength?.validate && value.trim().length > maxLength.value ) {
            let errMsg = maxLength?.errMsg ? maxLength.errMsg : `this input must be less than ${minLength.value}`
            errors[inputNameKey] = errMsg
            valid = false

        } else if( pattern?.validate && !value.match(pattern.value) ) {
            let errMsg = pattern?.errMsg? pattern.errMsg : 'sorry this not valid pattern'
            errors[inputNameKey] = errMsg
            valid = false
        }   
         
            !valid ? setErrorMsg({...errMsg,...errors}) : setErrorMsg({...errMsg, [inputNameKey]:''})
    }   


    return [handleSubmit,handleChange,errMsg,formData]
 
}
export default useForm


