//**  BookList.js **//
import React, { useState, useEffect } from 'react';
import * as styled from '../styles/styled'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import api from '../services/api'
import { FaWindowClose, FaEdit, FaBook } from 'react-icons/fa';

export default function BookList() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [index, setIndex] = useState(null);
    const [editingBook, setEditingBook] = useState(null);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        fetchData();
    },[])
    
        const fetchData = async () => {
            try {
                const response = await api.get('/api/books');
                setBooks(response.data);
            } catch (error) {
                console.error('Error fetching books:', error);
            } finally {
                setLoading(false);
            }
        };
        
        const handleEdit = (book) => {
            setEditingBook(book);
            setTitle(book.booK_NAME);
            setAuthor(book.author);
        };
    
        const handleUpdate = async () => {
            if (!title || !author) {
                toast.error("Favor preencher todos os campos.", {
                    position: "top-left",
                    });
                return;
            }   
            try {
                await api.put(`/api/books/${editingBook.booK_ID}`, { booK_ID: editingBook.booK_ID, booK_NAME: title, author });
                setTitle('');
                setAuthor('');
                setEditingBook(null);
                fetchData();
                toast.success("Livro atualizado com êxito.", {
                    position: "top-left",
                    });
            } catch (error) {
                toast.error("Erro ao atualizar livro.", {
                    position: "top-left",
                });
            }
        };
    
        const handleDelete = async (id) => {
            try {
                await api.delete(`/api/books/${id}`);
                const updatedBooks = books.filter(book => book.BOOK_ID !== id);
                setBooks(updatedBooks);
                fetchData();
                toast.success("Livro excluído com êxito.", {
                    position: "top-left",
                    });
            } catch (error) {
                console.error('Error deleting book:', error);
            }
        };
        
    if (loading) {
        return <div className='loading-table'>Carregando livros na Biblioteca...</div>;
    }

    return (
        <styled.Container>
            <div className='table-title'>Título - Autor</div>
            <styled.ul>
                {books.map(book => (
                    <styled.li key={book.booK_ID}>
                                {editingBook === book ?
                                (
                                    <>
                                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título" />
                                        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Autor" />
                                            <button onClick={handleUpdate}>Salvar</button>
                                            <button onClick={() => setEditingBook(null)}>Cancelar</button>
                                    </>
                                ) 
                                :
                                (
                            <>
                            {book.booK_NAME} - {book.author}
                                <span>
                                    <FaEdit onClick={() => handleEdit(book)} className="edit"/>
                                    <FaWindowClose onClick={() => handleDelete(book.booK_ID)} className="remove"/>    
                                </span>
                            </>
                        )}
                    </styled.li>
                ))}
            </styled.ul>
        </styled.Container>
    );
  } 





