import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {IconButton, Paper} from "@mui/material";
import {Search} from "@mui/icons-material";

const SearchBar = () => {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if(searchTerm) {
            navigate(`/search/${searchTerm}`)
        }

        setSearchTerm("")
    }

    return (
        <Paper
            component={"form"}
            onSubmit={handleSubmit}
            sx={{
                borderRadius: 20,
                border: '1px solid #E3E3E3',
                pl: 2,
                boxShadow: 'none',
                mr: {
                    sm: 5
                }
            }}
        >
            <input
                className={"search-bar"}
                placeholder={"Search..."}
                value={searchTerm}
                onChange={event => setSearchTerm(event.target.value)}
            />
            <IconButton
                type={"submit"}
                sx={{
                    p: '10px',
                    color: 'red'
                }}
            >
                <Search/>
            </IconButton>
        </Paper>
    );
};

export default SearchBar;
