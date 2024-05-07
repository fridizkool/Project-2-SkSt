interface NavOptions {
    showUserPrivilegedInfo: boolean;
    showAdminPriviledgedInfo: boolean;
  }
  

interface TaxFile {
  filingStatus?: string,
  dependent?: boolean,
  dependents?: number,
  income?: number,
  selfEmployedIncome?: number,
  withheldFederal?: number,
  withheldSS?: number,
  withheldMedicare?: number,
  studentStatus?: boolean,
  specialDeductions?: number
  userId?: number
}

interface UserProfile {
  [key: string]: string;
}


interface NavSystemProps {
  navOptions: NavOptions;
  enabled: boolean;
}


interface UserProfileFormProps {
  userProfile: any;
}

interface FormW2Props {
  id: number;
  getDataCallback: (id: number, formData: any) => void; // Adjust the type of formData as needed
  initInfo: { [key: string]: any }; // JSON object with key-value structured information
}

interface Form1099Props {
  id: number;
  getDataCallback: (id: number, formData: any) => void; // Adjust the type of formData as needed
  initInfo: { [key: string]: any }; // JSON object with key-value structured information
}

interface FormMiscProps {
  id: number;
  getDataCallback: (ormData: any) => void; // Adjust the type of formData as needed
  initInfo: { [key: string]: any }; // JSON object with key-value structured information
}
