function Die(prop) {
  const style = {
    backgroundColor: prop.isHeld ? '#59E391' : '#fff'
  }
  return (
    <button onClick={() => prop.onClick(prop.id)} style={style} className="shadow-custom rounded-[10px] flex items-center justify-center px-4 cursor-pointer p-3 text-2xl text-bg font-bold">{prop.value}</button>
  )
}

export default Die