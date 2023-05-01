import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
const HomePagae = () => {
    return ( 
        <>
        <h1>homepage</h1>
        <Stack direction="row" spacing={2}>
            <Button variant="contained" color="primary">Secondary</Button>
            <Button color="secondary">Secondary</Button>
            <Button variant="contained" color="success">
                Success
            </Button>
            <Button variant="outlined" color="error">
                Error
            </Button>
         </Stack>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde iusto perspiciatis delectus magnam eligendi eos laborum, distinctio deleniti, incidunt reiciendis natus maiores animi ipsam enim alias modi amet voluptas.</p>
        </>
        
     );
}
 
export default HomePagae;