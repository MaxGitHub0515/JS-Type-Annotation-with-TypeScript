
import axios, {AxiosResponse} from "axios";

interface Todo {
    userId:number;
    id:number;
    title:string;
    completed:boolean;
}
const  fetchData = async() => {
    try {
        const response: AxiosResponse<Todo> = await axios.get("https://jsonlaceholder.typicode.com/todos/1")
        console.log("Todo", response.data)
    } catch (error:any) {
        if(axios.isAxiosError(error)) {
            console.error('Axios Error', error.message)
        }
    }
}