export default async function getPart(_id) {
 
    try {
        const res = await fetch(`http://localhost:3000/api/parts/${_id}`,{cache : "no-store"})
        if (!res.ok) {
          throw new Error("faild to fetch part")
        }
        return res.json()
      } catch (error){
        console.log("error getting parts", error)
      }

  }