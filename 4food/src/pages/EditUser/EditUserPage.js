import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../../component/Header/Header'
import { ButtonLogin, Form } from '../../global/GeneralStyled';
import { useForm } from '../../hooks/useForm'
import { useProtectPage } from '../../hooks/useProtectPage';
import { goToPage } from '../../routes/coordinator';
import { requestData } from '../../services/requestAPI';

export default function EditUserPage() {
    useProtectPage()
    const navigate = useNavigate()
    const [data, setData] = useState()
    const [edit, setEdit] = useState(false)
    const { form, handleInputChange, clear } = useForm({
        name: "",
        email: "",
        cpf: ""
    });
    const token = localStorage.getItem("token")

    useEffect(() => {
        if (data) {
            form.name = data.user.name
            form.email = data.user.email
            form.cpf = data.user.cpf
        } else {
            requestData("get", "profile", "", token, setData);
        }
    }, [data]);

    useEffect(() => {
        if (edit) {
            goToPage(navigate, '/profile')
        }
    }, [edit])

    const submitEditUser = (e) => {
        e.preventDefault()
        requestData('put', 'profile', form, token, '', setEdit)
    }

    return (
        <div>
            <Header title={"Editar"} />
            <Form onSubmit={submitEditUser}>
                <TextField
                    name={"name"}
                    value={form.name}
                    onChange={handleInputChange}
                    label={"Nome"}
                    placeholder={"Nome"}
                    variant={"outlined"}
                    fullWidth
                    margin="normal"
                    required
                    sx={{
                        m: 0,
                        mt: "0.75rem",
                        mb: "1rem",
                    }}
                />
                <TextField
                    name={"email"}
                    value={form.email}
                    onChange={handleInputChange}
                    label={"E-Mail"}
                    placeholder={"email@email.com"}
                    variant={"outlined"}
                    fullWidth
                    margin="normal"
                    required
                    type={"email"}
                    sx={{
                        m: 0,
                        mb: "1rem",
                    }}
                />
                <TextField
                    name={"cpf"}
                    value={form.cpf}
                    onChange={handleInputChange}
                    label={"CPF"}
                    placeholder={"000.000.000-00"}
                    variant={"outlined"}
                    fullWidth
                    margin="normal"
                    required
                    pattern="([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})"
                    sx={{
                        m: 0,
                        mb: "1rem",
                    }}
                />
                <ButtonLogin>Salvar</ButtonLogin>
            </Form>
        </div>
    )
}
