import React, { useEffect, useState } from "react";
import service from "../../utils/services";
import Cards from "../../components/Cards";
export default function HomePage() {
  const data = []
  const [allRepos, setRepo] = useState(data)

  const getInitData = () => {
    service.getListRepo().then((result) => {
      setRepo(result)
    })
    
  }
  useEffect(() => {
    getInitData()
  }, []);

  return <div>
    {
      allRepos.length > 0 ?
      allRepos.map(item => (
        <Cards {...item} key={item.id} />
      ))
      :
      <p>Tidak ada Data</p>
    }
  </div>;
}
