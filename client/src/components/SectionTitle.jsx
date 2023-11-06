import { Typography } from "@mui/material";
const SectionTitle = ({title}) => {

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Typography variant='h4' sx={{
                position: 'relative',
                margin: '1rem',
                '&::after': {
                    content: `''`,
                    width: '40%',
                    height: '2px',
                    borderTop: '4px dotted black',
                    background: 'none',
                    position: 'absolute',
                    left: '50%',
                    transform: 'translate(-50%)',
                    bottom: '-5px',
                    transition: 'width 0.2s linear',
                    
                },
                '&:hover::after': {
                    width: '80%',
                }
            }}>{title}</Typography>
        </div>
    )
}

export default SectionTitle;