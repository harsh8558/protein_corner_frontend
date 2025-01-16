import {useState , useEffect} from 'react'
const Products = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 2000); // 2 seconds delay
    
        return () => clearTimeout(timer);
      }, []);
    
      if (isLoading) {
        return null; // This will trigger the Suspense fallback
      }
    return(<>
    <div className="w-full mt-32 bg-zinc-600">
        <h1 className="text-white">Products</h1>
    </div>
    </>)
}
export default Products



