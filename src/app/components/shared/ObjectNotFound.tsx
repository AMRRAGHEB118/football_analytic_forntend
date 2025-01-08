type notFoundProps = {
    name: string;
}

const ObjectNotFound = ({ name }: notFoundProps) => {
  return (
    <div>
      <h1 className="text-slate-100 text-center text-xl
      sm:text-4xl
      ">OOPS, NO {name.toUpperCase()} FOUND</h1>
    </div>
  )
}

export default ObjectNotFound;