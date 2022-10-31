import { Flex } from "@chakra-ui/react"

import { useFormik } from "formik";
import { Input, Button } from "@chakra-ui/react";
export default function AddPlace() {
    const formik = useFormik({
        initialValues: {
            place: '',
            comments: ''
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        },
    })
    return (
        <Flex bgColor='orange.100' >
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='place'>店家名稱</label>
                <Input
                    id='place'
                    name='place'
                    type='place'
                    onChange={formik.handleChange}
                    value={formik.values.place}
                />
                <label htmlFor='comments'>評論</label>
                <Input
                    id='comments'
                    name='comments'
                    type='comments'
                    onChange={formik.handleChange}
                    value={formik.values.comments}
                />
                <Button type='submit'>Submit</Button>
            </form>
        </Flex>

    )
}

