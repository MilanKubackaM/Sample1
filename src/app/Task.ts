export interface Task {
    id?: number;        //Needs to be optional, it doesnt have ID before saving into DB
    text: string;
    day: string;
    reminder: boolean; 
}