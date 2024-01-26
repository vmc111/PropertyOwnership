import { Department } from "../../Entities";
import { usersMapping } from "../LoginDetails";

export interface LoginDetails {
  username: string;
  password: string;
  department: Department;
}

interface ResponseType {
  isLoginSucces: boolean;
  errormessage?: string;
}

interface ReturnType {
    loginUser: (args: LoginDetails) => ResponseType
}
const useUserLogin = (): ReturnType => {
  let isLoginSucces: boolean = false;
  let errormessage: string | undefined = undefined;

  const loginUser = (args: LoginDetails): ResponseType => {
  const { username, password, department } = args;

      const usersArray = usersMapping.filter((each) => each.userName === username);
      if (!usersArray.length) {
          errormessage = "User doesnot exist";
          return {isLoginSucces, errormessage}
        }
        
        const isValidPassword = usersArray[0].password === password;
        if (!isValidPassword) {
            errormessage = "Invalid Password";
            return {isLoginSucces, errormessage}
        }
        
  const isValidDepartment = usersArray[0].department === department;
  if (!isValidDepartment) {
      errormessage = "User does not exists in the org.";
      return {isLoginSucces, errormessage}
    }
    
    isLoginSucces = true;
    return {
        isLoginSucces,
        errormessage,
    };
}

return {
    loginUser
}
};

export default useUserLogin;
