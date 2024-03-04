interface IUserData {
    id: number;
    name: string;
    email: string;


}

type TInputType = 'textField' | 'email' | 'password' | 'multiLineText' | 'checkbox' | 'tabSelector' | 'dropDownSelector' | 'switch' | 'textSelector'


export type {
    TInputType
}