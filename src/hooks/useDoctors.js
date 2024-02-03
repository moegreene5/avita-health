import ApiClient from "../services/api-client"
import { useQuery } from "@tanstack/react-query";

const apiClient = new ApiClient('/publicdoctors')


const useDoctors = () => useQuery({
    queryKey: ['doctors'],
    queryFn: () => apiClient.getAll()
})

export default useDoctors