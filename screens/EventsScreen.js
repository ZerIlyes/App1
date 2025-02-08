import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// Fonction pour calculer le compte à rebours
const getCountdown = (targetDate) => {
  const currentDate = new Date();

  // Ajuste l'année pour les événements récurrents
  const adjustedTargetDate = new Date(targetDate);
  if (adjustedTargetDate < currentDate) {
    adjustedTargetDate.setFullYear(currentDate.getFullYear());
    if (adjustedTargetDate < currentDate) {
      adjustedTargetDate.setFullYear(adjustedTargetDate.getFullYear() + 1);
    }
  }

  // Calcul du compte à rebours
  const timeDiff = adjustedTargetDate - currentDate;
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  return `${days}j ${hours}h ${minutes}m ${seconds}s`;
};

const EventsScreen = () => {
  const [countdowns, setCountdowns] = useState([]);

  const events = [
    { name: "Jared Leto", date: new Date("1971-01-01") },
    { name: "J.D. Salinger", date: new Date("1919-01-01") },
    { name: "Isaac Newton", date: new Date("1643-01-04") },
    { name: "Bradley Cooper", date: new Date("1975-01-05") },
    { name: "Diane Keaton", date: new Date("1946-01-05") },
    { name: "Rowan Atkinson", date: new Date("1955-01-06") },
    { name: "Blue Ivy Carter", date: new Date("2012-01-07") }, // Fille de Beyoncé & Jay-Z
    { name: "David Bowie", date: new Date("1947-01-08") },
    { name: "Elvis Presley", date: new Date("1935-01-08") },
    { name: "Stephen Hawking", date: new Date("1942-01-08") },
    { name: "Kate Middleton", date: new Date("1982-01-09") },
    { name: "Zayn Malik", date: new Date("1993-01-12") },
    { name: "Jeff Bezos", date: new Date("1964-01-12") },
    { name: "Haruki Murakami", date: new Date("1949-01-12") },
    { name: "Liam Hemsworth", date: new Date("1990-01-13") },
    { name: "Martin Luther King Jr.", date: new Date("1929-01-15") },
    { name: "Pitbull", date: new Date("1981-01-15") },
    { name: "Kate Moss", date: new Date("1974-01-16") },
    { name: "Michelle Obama", date: new Date("1964-01-17") },
    { name: "Benjamin Franklin", date: new Date("1706-01-17") },
    { name: "Muhammad Ali", date: new Date("1942-01-17") },
    { name: "Mac Miller", date: new Date("1992-01-19") },
    { name: "Edgar Allan Poe", date: new Date("1809-01-19") },
    { name: "Buzz Aldrin", date: new Date("1930-01-20") },
    { name: "Logic", date: new Date("1990-01-22") },
    { name: "XXXtentacion", date: new Date("1998-01-23") },
    { name: "Neil Diamond", date: new Date("1941-01-24") },
    { name: "Virginia Woolf", date: new Date("1882-01-25") },
    { name: "Cristiano Ronaldo", date: new Date("1985-01-26") },
    { name: "Ellen DeGeneres", date: new Date("1958-01-26") },
    { name: "Oprah Winfrey", date: new Date("1954-01-29") },
    { name: "Franklin D. Roosevelt", date: new Date("1882-01-30") },
    { name: "Phil Collins", date: new Date("1951-01-30") },
    { name: "Justin Timberlake", date: new Date("1981-01-31") },
    { name: "Harry Styles", date: new Date("1994-02-01") },
    { name: "Shakira", date: new Date("1977-02-02") },
    { name: "Gerard Piqué", date: new Date("1987-02-02") }, // Fun fact : même jour que Shakira
    { name: "Rosa Parks", date: new Date("1913-02-04") },
    { name: "Bob Marley", date: new Date("1945-02-06") },
    { name: "Charles Dickens", date: new Date("1812-02-07") },
    { name: "Ashton Kutcher", date: new Date("1978-02-07") },
    { name: "James Dean", date: new Date("1931-02-08") },
    { name: "Tom Hiddleston", date: new Date("1981-02-09") },
    { name: "Emma Roberts", date: new Date("1991-02-10") },
    { name: "Taylor Lautner", date: new Date("1992-02-11") },
    { name: "Abraham Lincoln", date: new Date("1809-02-12") },
    { name: "Christina Ricci", date: new Date("1980-02-12") },
    { name: "Galileo Galilei", date: new Date("1564-02-15") },
    { name: "The Weeknd", date: new Date("1990-02-16") },
    { name: "Paris Hilton", date: new Date("1981-02-17") },
    { name: "Michael Jordan", date: new Date("1963-02-17") },
    { name: "John Travolta", date: new Date("1954-02-18") },
    { name: "Rihanna", date: new Date("1988-02-20") },
    { name: "Jennifer Love Hewitt", date: new Date("1979-02-21") },
    { name: "George Washington", date: new Date("1732-02-22") },
    { name: "Steve Jobs", date: new Date("1955-02-24") },
    { name: "Victor Hugo", date: new Date("1802-02-26") },
    { name: "Elizabeth Taylor", date: new Date("1932-02-27") },
    { name: "John Steinbeck", date: new Date("1902-02-27") },
    { name: "Ja Rule", date: new Date("1976-02-29") },
    { name: "Justin Bieber", date: new Date("1994-03-01") },
    { name: "Camila Cabello", date: new Date("1997-03-03") },
    { name: "Alexander Graham Bell", date: new Date("1847-03-03") }, // Inventeur du téléphone
    { name: "Javier Bardem", date: new Date("1969-03-01") },
    { name: "Shaquille O’Neal", date: new Date("1972-03-06") },
    { name: "Bryan Cranston", date: new Date("1956-03-07") },
    { name: "Freddie Prinze Jr.", date: new Date("1976-03-08") },
    { name: "Oscar Isaac", date: new Date("1979-03-09") },
    { name: "Chuck Norris", date: new Date("1940-03-10") },
    { name: "Sharon Stone", date: new Date("1958-03-10") },
    { name: "Liza Minnelli", date: new Date("1946-03-12") },
    { name: "Albert Einstein", date: new Date("1879-03-14") },
    { name: "Simone Biles", date: new Date("1997-03-14") },
    { name: "Eva Longoria", date: new Date("1975-03-15") },
    { name: "Andrew Jackson", date: new Date("1767-03-15") }, // 7e président des USA
    { name: "Adam Levine", date: new Date("1979-03-18") },
    { name: "Bruce Willis", date: new Date("1955-03-19") },
    { name: "Glenn Close", date: new Date("1947-03-19") },
    { name: "David Livingstone", date: new Date("1813-03-19") }, // Explorateur
    { name: "Spike Lee", date: new Date("1957-03-20") },
    { name: "Ayrton Senna", date: new Date("1960-03-21") },
    { name: "Reese Witherspoon", date: new Date("1976-03-22") },
    { name: "Keri Russell", date: new Date("1976-03-23") },
    { name: "Elton John", date: new Date("1947-03-25") },
    { name: "Aretha Franklin", date: new Date("1942-03-25") },
    { name: "Diana Ross", date: new Date("1944-03-26") },
    { name: "Mariah Carey", date: new Date("1969-03-27") },
    { name: "Quentin Tarantino", date: new Date("1963-03-27") },
    { name: "Lady Gaga", date: new Date("1986-03-28") },
    { name: "Maxim Gorki", date: new Date("1868-03-28") },
    { name: "Vincent Van Gogh", date: new Date("1853-03-30") },
    { name: "Celine Dion", date: new Date("1968-03-30") },
    { name: "Marvin Gaye", date: new Date("1939-04-02") },
    { name: "Alec Guinness", date: new Date("1914-04-02") }, // Obi-Wan Kenobi original
    { name: "Eddie Murphy", date: new Date("1961-04-03") },
    { name: "Robert Downey Jr.", date: new Date("1965-04-04") },
    { name: "Heath Ledger", date: new Date("1979-04-04") },
    { name: "Pharrell Williams", date: new Date("1973-04-05") },
    { name: "Paul Rudd", date: new Date("1969-04-06") },
    { name: "Jackie Chan", date: new Date("1954-04-07") },
    { name: "Russell Crowe", date: new Date("1964-04-07") },
    { name: "Robin Wright", date: new Date("1966-04-08") },
    { name: "Kristen Stewart", date: new Date("1990-04-09") },
    { name: "Dennis Quaid", date: new Date("1954-04-09") },
    { name: "Mandy Moore", date: new Date("1984-04-10") },
    { name: "Charlie Hunnam", date: new Date("1980-04-10") },
    { name: "David Letterman", date: new Date("1947-04-12") },
    { name: "Claire Danes", date: new Date("1979-04-12") },
    { name: "Emma Watson", date: new Date("1990-04-15") },
    { name: "Leonardo da Vinci", date: new Date("1452-04-15") }, // Artiste et inventeur
    { name: "Martin Lawrence", date: new Date("1965-04-16") },
    { name: "Kareem Abdul-Jabbar", date: new Date("1947-04-16") }, // Joueur de NBA
    { name: "Victoria Beckham", date: new Date("1974-04-17") },
    { name: "Maria Sharapova", date: new Date("1987-04-19") },
    { name: "James Franco", date: new Date("1978-04-19") },
    { name: "Adolf Hitler", date: new Date("1889-04-20") }, // Figure historique controversée
    { name: "Queen Elizabeth II", date: new Date("1926-04-21") },
    { name: "John Cena", date: new Date("1977-04-23") },
    { name: "William Shakespeare", date: new Date("1564-04-23") }, // Dramaturge
    { name: "Al Pacino", date: new Date("1940-04-25") },
    { name: "Renee Zellweger", date: new Date("1969-04-25") },
    { name: "Jet Li", date: new Date("1963-04-26") },
    { name: "Channing Tatum", date: new Date("1980-04-26") },
    { name: "Penélope Cruz", date: new Date("1974-04-28") },
    { name: "Gal Gadot", date: new Date("1985-04-30") },
    { name: "Kirsten Dunst", date: new Date("1982-04-30") },
    { name: "Wes Anderson", date: new Date("1969-05-01") }, // Réalisateur
    { name: "Dwayne 'The Rock' Johnson", date: new Date("1972-05-02") },
    { name: "David Beckham", date: new Date("1975-05-02") },
    { name: "Adele", date: new Date("1988-05-05") },
    { name: "Chris Brown", date: new Date("1989-05-05") },
    { name: "Karl Marx", date: new Date("1818-05-05") }, // Philosophe
    { name: "George Clooney", date: new Date("1961-05-06") },
    { name: "Sigmund Freud", date: new Date("1856-05-06") }, // Psychanalyste
    { name: "Gary Cooper", date: new Date("1901-05-07") }, // Acteur
    { name: "Enrique Iglesias", date: new Date("1975-05-08") },
    { name: "Billy Joel", date: new Date("1949-05-09") },
    { name: "Rosario Dawson", date: new Date("1979-05-09") },
    { name: "Bono (U2)", date: new Date("1960-05-10") },
    { name: "Salvador Dalí", date: new Date("1904-05-11") }, // Peintre surréaliste
    { name: "Katharine Hepburn", date: new Date("1907-05-12") }, // Actrice
    { name: "Stevie Wonder", date: new Date("1950-05-13") },
    { name: "Robert Pattinson", date: new Date("1986-05-13") },
    { name: "Mark Zuckerberg", date: new Date("1984-05-14") },
    { name: "George Lucas", date: new Date("1944-05-14") }, // Réalisateur (Star Wars)
    { name: "Megan Fox", date: new Date("1986-05-16") },
    { name: "Pierce Brosnan", date: new Date("1953-05-16") }, // James Bond
    { name: "Sam Smith", date: new Date("1992-05-19") },
    { name: "Malcolm X", date: new Date("1925-05-19") }, // Activiste
    { name: "Cher", date: new Date("1946-05-20") },
    { name: "Notorious B.I.G.", date: new Date("1972-05-21") },
    { name: "Novak Djokovic", date: new Date("1987-05-22") }, // Joueur de tennis
    { name: "Naomi Campbell", date: new Date("1970-05-22") },
    { name: "Bob Dylan", date: new Date("1941-05-24") },
    { name: "Queen Victoria", date: new Date("1819-05-24") }, // Reine du Royaume-Uni
    { name: "John C. Reilly", date: new Date("1965-05-24") }, // Acteur
    { name: "Ian McKellen", date: new Date("1939-05-25") }, // Gandalf dans LOTR
    { name: "Miles Davis", date: new Date("1926-05-26") }, // Trompettiste de jazz
    { name: "Helena Bonham Carter", date: new Date("1966-05-26") },
    { name: "John F. Kennedy", date: new Date("1917-05-29") }, // Ancien président des USA
    { name: "Clint Eastwood", date: new Date("1930-05-31") },
    { name: "Colin Farrell", date: new Date("1976-05-31") },
    { name: "Morgan Freeman", date: new Date("1937-06-01") },
    { name: "Angelina Jolie", date: new Date("1975-06-04") },
    { name: "Bar Refaeli", date: new Date("1985-06-04") },
    { name: "Russell Brand", date: new Date("1975-06-04") },
    { name: "Dr. Dre", date: new Date("1965-06-06") },
    { name: "Prince", date: new Date("1958-06-07") },
    { name: "Johnny Depp", date: new Date("1963-06-09") },
    { name: "Jesse McCartney", date: new Date("1987-06-09") },
    { name: "Michael J. Fox", date: new Date("1961-06-09") },
    { name: "Natalie Portman", date: new Date("1981-06-09") },
    { name: "Bob Dylan", date: new Date("1941-06-12") },
    { name: "Lucy Hale", date: new Date("1989-06-14") },
    { name: "Yasmine Bleeth", date: new Date("1968-06-14") },
    { name: "Steffi Graf", date: new Date("1969-06-14") },
    { name: "Donald Trump", date: new Date("1946-06-14") },
    { name: "Tupac Shakur", date: new Date("1971-06-16") },
    { name: "Blaise Pascal", date: new Date("1623-06-19") },
    { name: "Nicole Kidman", date: new Date("1967-06-20") },
    { name: "Chris Hemsworth", date: new Date("1983-06-20") },
    { name: "Lana Del Rey", date: new Date("1985-06-21") },
    { name: "Chris Pratt", date: new Date("1979-06-21") },
    { name: "Meryl Streep", date: new Date("1949-06-22") },
    { name: "Daniel Radcliffe", date: new Date("1989-06-23") },
    { name: "Solange Knowles", date: new Date("1986-06-24") },
    { name: "Zinedine Zidane", date: new Date("1972-06-23") },
    { name: "Lionel Messi", date: new Date("1987-06-24") },
    { name: "Ariana Grande", date: new Date("1993-06-26") },
    { name: "Khloe Kardashian", date: new Date("1984-06-27") },
    { name: "Kylie Minogue", date: new Date("1968-06-28") },
    { name: "Mel Gibson", date: new Date("1956-06-29") },
    { name: "Princess Diana", date: new Date("1961-07-01") },
    { name: "Jane Austen", date: new Date("1775-07-02") },
    { name: "Tom Cruise", date: new Date("1962-07-03") },
    { name: "Barack Obama", date: new Date("1961-07-04") },
    { name: "Dwayne Johnson", date: new Date("1972-07-04") },
    { name: "Sylvester Stallone", date: new Date("1946-07-06") },
    { name: "Daniel Craig", date: new Date("1968-07-07") },
    { name: "Jaden Smith", date: new Date("1998-07-08") },
    { name: "Tom Hanks", date: new Date("1956-07-09") },
    { name: "LeBron James", date: new Date("1984-07-10") },
    { name: "Sofia Vergara", date: new Date("1972-07-10") },
    { name: "Chris Hemsworth", date: new Date("1983-07-13") },
    { name: "Will Ferrell", date: new Date("1967-07-16") },
    { name: "Richard Branson", date: new Date("1950-07-18") },
    { name: "Nelson Mandela", date: new Date("1918-07-18") },
    { name: "Meryl Streep", date: new Date("1949-07-18") },
    { name: "Gisele Bündchen", date: new Date("1980-07-20") },
    { name: "Chris Pratt", date: new Date("1979-07-21") },
    { name: "Melania Trump", date: new Date("1970-07-26") },
    { name: "Barack Obama", date: new Date("1961-08-04") },
    { name: "Louis Armstrong", date: new Date("1901-08-04") },
    { name: "Meghan Markle", date: new Date("1981-08-04") },
    { name: "Louis Pasteur", date: new Date("1822-08-07") },
    { name: "Charlize Theron", date: new Date("1975-08-07") },
    { name: "Kylie Jenner", date: new Date("1997-08-10") },
    { name: "Steve Wozniak", date: new Date("1950-08-11") },
    { name: "Leonardo DiCaprio", date: new Date("1974-08-11") },
    { name: "Hugh Jackman", date: new Date("1968-08-12") },
    { name: "Ben Affleck", date: new Date("1972-08-15") },
    { name: "Jennifer Lawrence", date: new Date("1990-08-15") },
    { name: "Madonna", date: new Date("1958-08-16") },
    { name: "Angela Bassett", date: new Date("1958-08-16") },
    { name: "Usain Bolt", date: new Date("1986-08-21") },
    { name: "Michael Jackson", date: new Date("1958-08-29") },
    { name: "Julia Roberts", date: new Date("1967-08-28") },
    { name: "Cameron Diaz", date: new Date("1972-08-30") },
    { name: "Zendaya", date: new Date("1996-09-01") },
    { name: "Keanu Reeves", date: new Date("1964-09-02") },
    { name: "Beyoncé", date: new Date("1981-09-04") },
    { name: "Evan Rachel Wood", date: new Date("1987-09-07") },
    { name: "Pink", date: new Date("1979-09-08") },
    { name: "Adam Sandler", date: new Date("1966-09-09") },
    { name: "Mariah Carey", date: new Date("1969-09-09") },
    { name: "Hugh Grant", date: new Date("1960-09-09") },
    { name: "Prince Harry", date: new Date("1984-09-15") },
    { name: "Sophia Loren", date: new Date("1934-09-20") },
    { name: "Stephen King", date: new Date("1947-09-21") },
    { name: "Michael Douglas", date: new Date("1944-09-25") },
    { name: "Will Smith", date: new Date("1968-09-25") },
    { name: "Serena Williams", date: new Date("1981-09-26") },
    { name: "Terry Crews", date: new Date("1968-09-30") },
    { name: "Matthew McConaughey", date: new Date("1969-10-04") },
    { name: "Jon Hamm", date: new Date("1971-10-10") },
    { name: "Chris Hemsworth", date: new Date("1983-10-11") },
    { name: "Hugh Jackman", date: new Date("1968-10-12") },
    { name: "Eminem", date: new Date("1972-10-17") },
    { name: "Zac Efron", date: new Date("1987-10-18") },
    { name: "Snoop Dogg", date: new Date("1971-10-20") },
    { name: "Kim Kardashian", date: new Date("1980-10-21") },
    { name: "Demi Lovato", date: new Date("1992-10-20") },
    { name: "Katy Perry", date: new Date("1984-10-25") },
    { name: "Lady Gaga", date: new Date("1986-10-28") },
    { name: "Bill Gates", date: new Date("1955-10-28") },
    { name: "Kerry Washington", date: new Date("1977-10-31") },
    { name: "Kris Jenner", date: new Date("1955-11-05") },
    { name: "Emma Stone", date: new Date("1988-11-06") },
    { name: "Neil Gaiman", date: new Date("1960-11-10") },
    { name: "Leonardo DiCaprio", date: new Date("1974-11-11") },
    { name: "Charles Manson", date: new Date("1934-11-12") },
    { name: "Ryan Gosling", date: new Date("1980-11-12") },
    { name: "RuPaul", date: new Date("1960-11-17") },
    { name: "Katie Holmes", date: new Date("1978-11-18") },
    { name: "Billie Eilish", date: new Date("2001-11-18") },
    { name: "Jodie Foster", date: new Date("1962-11-19") },
    { name: "Scarlett Johansson", date: new Date("1984-11-22") },
    { name: "Mark Ruffalo", date: new Date("1967-11-22") },
    { name: "John F. Kennedy", date: new Date("1917-11-22") },
    { name: "Miley Cyrus", date: new Date("1992-11-23") },
    { name: "Katherine Heigl", date: new Date("1978-11-24") },
    { name: "Catherine Zeta-Jones", date: new Date("1969-11-25") },
    { name: "Walt Disney", date: new Date("1901-12-05") },
    { name: "Frank Sinatra", date: new Date("1915-12-12") },
    { name: "Taylor Swift", date: new Date("1989-12-13") },
    { name: "Liam Hemsworth", date: new Date("1990-12-13") },
    { name: "Christina Aguilera", date: new Date("1980-12-18") },
    { name: "Billie Eilish", date: new Date("2001-12-18") },
    { name: "Brad Pitt", date: new Date("1963-12-18") },
    { name: "Rita Ora", date: new Date("1990-12-22") },
    { name: "Dido", date: new Date("1971-12-25") },
    { name: "John Legend", date: new Date("1978-12-28") },

  ];

  // Mettre à jour le compte à rebours toutes les secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdowns(events.map(event => {
        const countdownText = getCountdown(event.date);

        return {
          name: event.name,
          countdownText,
          isEventToday: countdownText.startsWith('0j'),
          date: event.date,
        };
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, [events]);

  return (
    <ScrollView style={styles.container}>
      {countdowns.map((event, index) => (
        <View key={index} style={[styles.eventContainer, event.isEventToday && styles.todayEvent]}>
          <Text style={styles.eventName}>{event.name}</Text>
          <Text style={[styles.eventCountdown, event.isEventToday && styles.todayCountdown]}>
            {event.isEventToday ? "C'est aujourd'hui !" : event.countdownText}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  eventContainer: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  todayEvent: {
    backgroundColor: '#ffcccb',
  },
  eventName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  eventCountdown: {
    fontSize: 16,
    color: '#666',
  },
  todayCountdown: {
    color: '#d32f2f',
    fontWeight: 'bold',
  },
});

export default EventsScreen;
