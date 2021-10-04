import  {useRouter} from 'next/router';

function productId() {
    const router = useRouter();
    let id = router.query.productId;
    console.log(id);

  

    return (
        <div>
            <h3>Specific Product ID - { id }</h3>
        </div>
    )
}

export default productId;
