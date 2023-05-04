import { useEffect, useState } from "react";

const ReposList = () =>{
    const [repos, setRepos] = useState([]);

    useEffect(()=> {
        fetch('https://api.github.com/users/thallysvic17/repos')
        .then(res => res.json())
        .then( resJson =>{
            setRepos(resJson);
           
        })
    }, [])

    return(
        <ul>
            {repos.map(({id, name, language, html_url}) => (
                <li key={id}>
                    <b>Nome:</b> {name} <br/>
                    <b>linguagem:</b> {language} <br/>
                    <a  target="blank" href={html_url}>Visitar no GitHub</a> <br/>
                   
                </li>   
            ))}
          
        </ul>
    )
}

export default ReposList;