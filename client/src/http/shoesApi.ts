import { $user } from '.';
export const getShoes = async () => {
  const {data} = await $user.get('api/shoes/getAll') 
  return data 
}