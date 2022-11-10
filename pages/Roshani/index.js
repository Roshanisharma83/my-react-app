export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return{
        props:{Roshani:data}
    }
}


const Roshani = ({Roshani}) => {
    return ( 
        <h1>Roshani</h1>
        
        // {Roshani.map(Roshani =>(
        //     <div key = {Roshani.id}>
                
        //     </div>
        // ))}
            
     );
}
 
export default Roshani;