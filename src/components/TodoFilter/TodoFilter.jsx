import React from "react";
import SfInput from "../UI/Input/SfInput";
import SfSelect from "../UI/Select/SfSelect";

const TodoFilter = ({filter, setFilter}) => {
    return (
        <div>
            <SfInput
                onChange={(e) => setFilter({...filter, query: e.target.value})}
                value={filter.query}
                placeholder='Search...'
            />
            <SfSelect
                value={filter.query}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                options={[
                    { value: "title", name: "by title" },
                    { value: "description", name: "by description" },
                ]}
            />
        </div>
    );
};

export default TodoFilter;
