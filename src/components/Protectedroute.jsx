
function Protectedroute({islogin,children}) {
    if(islogin){
        return children
    }
  return (
    <div>please login first</div>
  )
}

export default Protectedroute