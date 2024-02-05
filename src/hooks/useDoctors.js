import ApiClient from "../services/api-client"
import { useQuery } from "@tanstack/react-query";

const apiClient = new ApiClient('/publicdoctors')


const useDoctors = () => useQuery({
    queryKey: ['doctors'],
    queryFn: () => apiClient.getAll(),
    staleTime: 60 * 1000 * 60 * 24  // 1d

})

export default useDoctors