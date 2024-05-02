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