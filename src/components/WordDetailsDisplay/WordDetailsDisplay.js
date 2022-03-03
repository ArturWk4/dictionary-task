import React from "react";
import PropTypes from "prop-types";
import "./WordDetailsDisplay.scss";

const WordDetailsDisplay = (props) => {
  const { word, phonetic, phonetics, meanings, license, sourceUrls } = props;

  const parseObject = (obj) => {
    return Object.entries(obj).map(([key, value]) =>
      value && typeof value !== "object" ? (
        key !== "audio" ? (
          `${key}: ${value}`
        ) : (
          <audio controls src={value}>
            Your browser does not support the <code>audio</code> element.
          </audio>
        )
      ) : null
    );
  };

  return (
    <section className="word-details-wrapper">
      <div className="word-details">
        <div className="topic">
          <p className="topic-header">
            Word: <span>{word}</span>
          </p>
        </div>
        <div className="topic">
          <p className="topic-header">
            Phonetic: <span>{phonetic}</span>
          </p>
        </div>

        {phonetics.map((item, index) => {
          const phoneticsArray = parseObject(item);
          return (
            <div className="topic" key={`phonecit-${index}`}>
              <p className="topic-header">Phonetics:</p>
              <ul>
                {phoneticsArray.map(
                  (phoneticsItem, phonecitIndex) =>
                    phoneticsItem !== null && (
                      <li key={`phonetic-${phonecitIndex}`}>{phoneticsItem}</li>
                    )
                )}
              </ul>
            </div>
          );
        })}

        <div className="topic">
          <p className="topic-header">Meanings:</p>
          {meanings.map((item, index) => {
            return (
              <ul key={index}>
                <li>{`Part of Speech: ${item.partOfSpeech}`}</li>
                {item.definitions.map((definitionItem) => {
                  const definitionsArray = parseObject(definitionItem);
                  return definitionsArray.map(
                    (definition, definitionIndex) =>
                      definition && (
                        <li key={`definition-${definitionIndex}`}>
                          {definition}
                        </li>
                      )
                  );
                })}
              </ul>
            );
          })}
        </div>
        <div className="topic">
          <p className="topic-header">License:</p>
          <ul>
            {parseObject(license).map(
              (licenseItem, index) =>
                licenseItem && <li key={`license-${index}`}>{licenseItem}</li>
            )}
          </ul>
        </div>
        <div className="topic">
          <p className="topic-header">Source URLs:</p>
          <ul>
            {sourceUrls.map((url, index) => (
              <li key={`sourceUrl-${index}`}>{url}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

WordDetailsDisplay.propTypes = {
  word: PropTypes.string,
  phonetic: PropTypes.string,
  phonetics: PropTypes.array,
  meanings: PropTypes.array,
  license: PropTypes.object,
  sourceUrls: PropTypes.array
}
export default WordDetailsDisplay;
