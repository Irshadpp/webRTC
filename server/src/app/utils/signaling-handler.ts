
export const signalingHandler = (data:any, socket: any, io: any) =>{
    const {connUserSocketId, signal} = data;
    console.log("connUserSocketId=======================>", connUserSocketId?.data?.connUserSocketId)
    const signalingData = {signal, connUserSocketId: socket.id};
    io.to(connUserSocketId).emit("conn-signal", signalingData);
    console.log("conn-signal event emited from----------->", connUserSocketId,"with signal data==========>", signalingData)
}