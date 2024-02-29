import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ListGallery from "./ListGallery";
import ImageModal from "./ImageModal";
import Modal from "react-modal";
import Form from "./Form";
import LoadMore from "./LoadMore";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#modal");

const App = () => {
  const [articles, setArticles] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [large, setLarge] = useState("");
  const [alt, setAlt] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  function openModal(large, alt) {
    setIsOpen(true);
    setLarge(large);
    setAlt(alt);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleSubmit(query) {
    setQuery(query);
    setArticles([]);
    setPage(1);
  }

  function LoadMoreFun() {
    setPage(() => page + 1);
  }

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      const responce = await axios.get(
        `https://api.pexels.com/v1/search?query=${query}&page=${page}`,
        {
          headers: {
            Authorization:
              "uJJPgvAVKL0QT0gh97pQdXk9sV298JhgV7WrthlQG7JU3yZZk2T9FLxM",
          },
        }
      );
      setArticles((prevArticles) => {
        return [...prevArticles, ...responce.data.photos];
      });
    };
    getData();
  }, [query, page]);

  return (
    <div>
      <Form onSubmit={handleSubmit} />

      {articles.length > 0 && (
        <ListGallery data={articles} onClick={openModal} />
      )}
      {articles.length > 0 && <LoadMore onClick={LoadMoreFun} />}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {<ImageModal large={large} alt={alt} />}
      </Modal>
    </div>
  );
};

export default App;
