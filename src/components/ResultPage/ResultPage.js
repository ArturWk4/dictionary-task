import React, { useEffect, useState } from "react";
import { useMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setWord } from "../../store/word/actions";
import Spinner from "../Spinner/Spinner";
import WordDetailsDisplay from "../WordDetailsDisplay/WordDetailsDisplay";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const ResultPage = () => {
  const { params } = useMatch("/:word");
  const [isLoading, setIsLoading] = useState(true);
  const { wordData } = useSelector(({ word }) => word);
  const dispatch = useDispatch();

  const setWordAction = (word) => dispatch(setWord(word));

  useEffect(() => {
    (async () => {
      await setWordAction(params.word);
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      {!wordData ? (
        <NotFoundPage />
      ) : isLoading ? (
        <Spinner />
      ) : (
        wordData.map((item, index) => (
          <WordDetailsDisplay
            key={index}
            word={item.word}
            phonetic={item.phonetic}
            phonetics={item.phonetics}
            meanings={item.meanings}
            license={item.license}
            sourceUrls={item.sourceUrls}
          />
        ))
      )}
    </>
  );
};

export default ResultPage;
