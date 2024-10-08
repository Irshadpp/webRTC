import axios from "axios";

const serverApi = "http://localhost:8000/api/v1";

export const getRoomExists = async (roomId: string) =>{
    const response = await axios.get(`${serverApi}/meet/room-exists/${roomId}`);
    return response.data;
}