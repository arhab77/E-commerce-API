import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, initSearch, searchProduct, selectedCategory } from "../../app/action/productAction";
import { Container, Grid, InputAdornment, TextField } from "@mui/material";
import { AccountCircle, Search, WorkOutlineRounded } from "@mui/icons-material";
import { Dropdown } from "react-bootstrap";
import { debounce } from "lodash";
import Autocomplete from "@mui/material/Autocomplete";
import { Link } from "react-router-dom";

const NavigationBar = () => {
    const categories = useSelector((state) => state.product.categories);
    const dispatch = useDispatch();
    const searchResults = useSelector((state) => state.product.searchResults);
    const searchKeyword = useSelector((state) => state.product.searchKeyword);

    useEffect(() => {
        const debouncedSearch = debounce(() => {
            dispatch(searchProduct(searchKeyword));
        }, 500);

        if (searchKeyword.trim()) {
            debouncedSearch();
        }

        return debouncedSearch.cancel; // Membersihkan debounce saat komponen tidak lagi ada
    }, [dispatch, searchKeyword]);

    const handleSearchChange = (e) => {
        const newSearchKeyword = e.target.value;
        dispatch(initSearch(newSearchKeyword));
    };

    const handleCategoryClick = (categoryId) => {
        dispatch(selectedCategory(categoryId.id, categoryId.name));
    };

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <Container>
            <Grid container style={{ marginTop: "10px", marginBottom: "10px" }}>
                <Grid item sm={2} style={{ marginTop: "1px" }}>
                    <img src="BeboTech.png" alt="" style={{ marginTop: "9px" }} />
                </Grid>
                <Grid item sm={6} style={{ marginTop: "1px" }}>
                    <Autocomplete
                        id="search"
                        options={searchResults}
                        getOptionLabel={(option) => option.name}
                        style={{ width: "95%" }}
                        onChange={(event, newValue) => {
                            console.log("Selected option: ", newValue);
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Search Products..."
                                variant="outlined"
                                InputProps={{
                                    ...params.InputProps,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                        <Search />
                                        </InputAdornment>
                                    ),
                                }}
                                value={searchKeyword}
                                onChange={handleSearchChange}
                            />
                        )}
                        renderOption={(props, option) => (
                            <li {...props}>
                                <Link to={`/detail/${option.id}`} style={{textDecoration:'none', color:'black'}}>
                                    <img src={option.photo} alt={option.name} style={{ marginRight: "8px", width: "40px", height: "40px" }} />
                                    {option.name}
                                </Link>
                            </li>
                          )}
                    />
                </Grid>
                <Grid item sm={2} style={{ marginTop: "10px" }}>
                    <Dropdown>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            All Category
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {categories.map((item, id) => (
                                <Dropdown.Item
                                key={id}
                                onClick={() =>
                                    handleCategoryClick({
                                    id: item.keyword_id,
                                    name: item.keyword_name,
                                    })
                                }
                                >
                                {item.keyword_name}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </Grid>
                <Grid item sm={1} style={{ marginTop: "1px" }}>
                    <div style={{ marginTop: "12px" }}>
                        <WorkOutlineRounded />
                        <p className="notification-badge">4</p>
                    </div>
                </Grid>
                <Grid item sm={1} style={{ marginTop: "1px", textAlign: "right" }}>
                    <h6 style={{ marginTop: "13px" }}>
                        Hai, Ulin <AccountCircle />
                    </h6>
                </Grid>
            </Grid>
        </Container>
    );
};

export default NavigationBar;
