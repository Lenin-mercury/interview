import React ,{useState , useEffect} from 'react';

/*
    1. Decalare state "propdata" using useState
    2. propdata should contain the res from app.js
    3. useEffect must used in data loading
    4. Create button, on click of button the data should come.
*/


const User = (props) => {
    const [count , setCount] = useState(0);
    const [test , setTest] = useState(false);

    useEffect(() => {
        increase();
    }, [test]);

    console.log(count);

    function createList(item, index){
        return(
            <div>
                <span>{index + 1}</span>
                <h1> Name : {item.name} </h1>
                <h2>Email : {item.email}</h2>
            </div>
        )
    }


    const [propdata , setPropdata] = useState();

    /*
      test :
    */
    // function increase () {
    //     setCount (count + 1);
    // }
    // function decrease () {
    //     setCount (count - 1);
    // }

    const increase = () => {
        setCount(count  + 200 );
    }

    const decrease = () => {
        setCount(count - 10);
    }

    const toggleTest = () => {
        setTest(!test)
    }

    return (
        <div >
        <h1>User</h1>
        {/* <div>{props.userData.map(createList)}</div> */}
        <h1>Count :{ count}</h1>
        <button onClick={increase}>Click + 1</button>
        <button onClick={decrease}>Click - 1</button>

        <button onClick={toggleTest}>Test</button>

        </div>



    );
};

export default User;