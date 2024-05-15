//** BookForm.js **//
import React, { useState, useEffect } from 'react';
import * as styled from '../styles/styled' 
import '../styles/GlobalStyles.css'
import api from '../services/api'
import { FaBook } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

export default function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [books, setBooks] = useState([]);

    const fetchData = async () => {
        try {
            const response = await api.get('/api/books');
            setBooks(response.data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    useEffect(() => {
      fetchData([...books]);
  },[])

     const handleSubmit = () => {
        if (!title || !author) {
        toast.error("Favor preencher todos os campos.", {
        position: "top-left",
        });
        return;
      }
        api.post('/api/books', { booK_NAME: title, author })
        .then(response => {
          setTitle('');
          setAuthor('');
          toast.success("Livro inserido com sucesso!.", {
            position: "top-left",
            });
      fetchData([...books]);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
        })
        .catch(error => {
          toast.error(`Erro ao inserir livro. ${error.message}`, {
            position: "top-left",
          });
        });
      };
  return (
      <>
      <ToastContainer />
      <styled.FormContainer>
        <styled.FormTitle>Online BookShelf &nbsp;<FaBook className="book" /></styled.FormTitle>
       <label for='title'><b>Título</b></label>
        <styled.Input type="text" name='title' value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Insira o título do livro"/>
        <label for='author'><b>Autor</b></label>
        <styled.Input type="text" name='author' value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Insira o Autor"/>
        <styled.ButtonAdicionar type="button" onClick={handleSubmit}>Adicionar Livro</styled.ButtonAdicionar>
      </styled.FormContainer>
      </>
  );
 }

