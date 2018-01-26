import React from "react";
import {
  Container,
  SayHi,
  Heading,
  TextRow,
  TextHeading,
  TextBody,
} from "./common";
import { Header } from "../Header";

const CustomContainer = Container.extend`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5em 0 0;
`;

const CustomHeading = Heading.extend`
  color: black;
  font-size: 36px;
`;

const Legal = () => (
  <CustomContainer>
    <Header headerRight={<SayHi />} />
    <CustomHeading>Legal information</CustomHeading>
    <TextRow>
      <TextHeading>Förmedling av försäkringar</TextHeading>
      <TextBody>
        <p>
          Hedvig står under Finansinspektionens tillsyn som förmedlare av
          försäkringar och på våra försäkringsavtal tillämpas
          Försäkringsavtalslagen (2005:104).
        </p>
        <p>
          Exklusiv försäkringsgivare för Hedvigs försäkringar är International
          Insurance Company of Hannover SE. Hedvigs ersättning mottagen från dig
          som kund består av en fast procentavgift av din premie.
        </p>
        <p>
          Hedvig är registrerat hos Bolagsverket och har sin ansvarsförsäkring
          hos QBE Insurance (Europe) Ltd., UK filial Sverige. Se längst ner på
          sidan för kontaktuppgifter till Finansinspektionen, Bolagsverket och
          QBE.
        </p>
      </TextBody>
    </TextRow>
    <TextRow>
      <TextHeading>Om du inte är nöjd</TextHeading>
      <TextBody>
        <p>
          Om du har ett allmänt klagomål eller är missnöjd med någonting i ett
          skadeärende, kontakta Hedvig direkt via din app eller maila{' '}
          <a href="mailto:hedvig@hedvig.com">hedvig@hedvig.com</a>.
        </p>
        <p>
          Du kan också vända dig till Konsumentvägledningen i din kommun eller
          till Konsumenternas Försäkringsbyrå. Vid tvist kan du vända dig till
          Allmänna reklamationsnämnden eller till allmän domstol.
        </p>
      </TextBody>
    </TextRow>
    <TextRow>
      <TextHeading>Dataskydd</TextHeading>
      <TextBody>
        <p>
          Hedvig, och i förekommande fall International Insurance Company of
          Hannover SE, använder personuppgifter i administration,
          skadereglering, marknads- och kundanalys, produktutveckling,
          marknadsföring och för statistiska ändamål. Vi behandlar uppgifterna i
          enlighet med Personuppgiftslagen (1998:204). Personuppgifterna kan
          komma att kompletteras med uppgifter ur offentliga register, främst
          statens person- och adressregister (SPAR) och kan komma att lämnas ut
          till samarbetspartners. I vissa fall är vi också enligt lag skyldiga
          att lämna ut uppgifter till bland andra Finansinspektionen och
          Skatteverket. Du har rätt att ansöka om att få veta vilka
          personuppgifter vi har om dig och begära rättelse av felaktiga
          uppgifter.
        </p>
      </TextBody>
    </TextRow>
    <TextRow>
      <TextHeading>Cookies</TextHeading>
      <TextBody>
        <p>
          En cookie är en liten datafil som lagras i din dator. Hedvig värnar om
          din integritet och ditt förtroende är vår mest värdefulla tillgång.
          Här förklaras hur vi samlar in och använder cookies och hur vi skyddar
          din integritet i samband med detta.
        </p>
        <h5>Användning av cookies</h5>
        <p>
          För att ge dig som Hedvig-användare en så bra upplevelse som möjligt
          använder vi cookies på denna webbplats, och liknande tekniker i våra
          appar. Dessutom kan cookies från tredje part användas i de fall vi
          använder externa tjänster för att förbättra produkten. Hedvig använder
          två typer av cookies, dels sessionsbaserade cookies, som försvinner så
          fort du stänger ner din webbläsare, men även mer långlivade cookies
          för vissa syften.
        </p>
        <h5>Syftet med cookies</h5>
        <p>
          Huvudsyftet med Hedvigs användning av cookies är för att förbättra de
          tjänster vi erbjuder.
        </p>
        <p>
          Vi använder cookies för att hantera inloggningar och öka säkerheten
          för våra användare, att analysera användare och användarbeteende
          anonymt för att veta vilka delar av tjänsten vi bör förbättra, att
          analysera hur våra mailutskick fungerar och att vi skickar information
          som du som användare uppskattar, samt för att komma ihåg inställningar
          och andra val som du gör på våra webbplatser.
        </p>
        <h5>Hantera dina cookies</h5>
        <p>
          Om du inte vill att vi använder cookies kan du enkelt stänga av detta.
          I din webbläsare kan du göra inställningar som hindrar Hedvig och
          andra från att registrera cookies på din dator. Sådana inställningar
          innebära dock att vissa funktioner på de flesta webbplatser inte
          kommer att fungera.
        </p>
        <p>
          Om du vill kan du i de flesta webbläsares inställningar välja att bara
          stänga av spårning, vilket innebär att Hedvig inte samkör data från
          våra egna och i förekommande fall våra partners webbplatser.
        </p>
        <p>
          För att göra samma sak på din telefon kan du för iOS under
          integritets- och reklaminställningar välja att begränsa spårning. För
          Android gör du detta under Google-inställningar och annonser.
        </p>
      </TextBody>
    </TextRow>
    <TextRow>
      <TextHeading>Kontaktuppgifter</TextHeading>
      <TextBody>
        <h5>Finansinspektionen</h5>
        <p>
          Box 7821<br />
          103 97 Stockholm<br />
          finansinspektionen@fi.se<br />
          T: 08-408 980 00
        </p>
        <h5>Bolagsverket</h5>
        <p>
          851 81 Sundsvall<br />
          bolagsverket@bolagsverket.se<br />
          T: 0771-670 670
        </p>
        <h5>
          International Insurance Company of Hannover SE, Scandinavian branch
        </h5>
        <p>
          Box 22085<br />
          Hantverkargatan 25<br />
          104 22 Stockholm<br />
          T: 08-617 54 00<br />
        </p>
        <h5>QBE Insurance (Europe) Ltd., UK filial Sverige</h5>
        <p>
          Sveavägen 13<br />
          111 57 Stockholm<br />
          T: 08-587 514 00<br />
        </p>
      </TextBody>
    </TextRow>
  </CustomContainer>
);

export default Legal;
