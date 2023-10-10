/* eslint-disable react/prop-types */
import Dailyinput from "./Dailyinput"
import Daily from "./daily"

const Dailies = ({dailies, onAdd, onDelete}) => {
  return (
    <main>
      <section className="">
        <Dailyinput onAdd={onAdd}/>
      </section>
      <section className="relative top-64">
      <div className="container flex-col gap-10 dailies pb-10">
{dailies.length>0?dailies.map((daily)=>(<Daily key={daily.id} daily={daily} onDelete={onDelete}/>)):<p className="text-white text-lg">There Are no dailies</p>}
      </div>
      </section>
    </main>
  )
}

export default Dailies