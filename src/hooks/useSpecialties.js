import ApiClient from "../services/api-client"
import { useQuery } from "@tanstack/react-query";

const apiClient = new ApiClient('/publicspecialties')


const useSpecialties = () => useQuery({
    queryKey: ['specialties'],
    queryFn: () => apiClient.getAll()
})

export default useSpecialties