import { ArticleResponse, Metadata } from './types';
import * as faker from 'faker';

const article: ArticleResponse = {
  plain: `The By-invitation section publishes commentaries from a range of perspectives. For a view in favour of vaccine certificates, read this commentary by Ashish Jha. For more on the topic, read The Economist’s leader and article.\nWE WERE standing on the pavement outside the restaurant in a state of mild shock. It looked as if covid-19 was over—or at least offering a break. Families and couples were walking in and out of a restaurant in Jerusalem on a beautiful spring evening. Were it not that some people were wearing face-masks, it could have been a scene from pre-pandemic times. But as we entered, another surprise was in store.\n\nThe waitress asked if we had our “green passes”, as Israel’s vaccine certificates are known. My friend and I exchanged worried glances—wondering if we knew where to find them—for it isn’t a common request. My friend needed to ask the waitress if she knew how to operate the app. I fumbled for a print-out that was folded in my wallet. Neither of us had used it in weeks. And the waitress barely glanced at them, nor verified the QR codes nor looked at our identity cards. It was just a formality and once completed, we were in.\nIs Israel’s reawakening from the covid-19 crisis due to the green pass? Not really. Most places don’t ask for it, and those that do still welcome customers without one, provided they sit on outside patios or in gardens. Instead, what has reopened society and the economy are the vaccines. The process of getting one is simple and there are doses for all. Thus 90% of adults have now either been inoculated or have recovered from covid-19. The numbers of new infections and deaths are low. That’s why we can interact again. The green pass didn’t enable this—the vaccines did—but the green-pass system was the tool that helped us get there.\nAs countries around the world get their populations vaccinated, debates have flared over vaccine passports. Many have looked to Israel as an example of how to roll out certificates and reopen society. Our experience does offer a lesson, though one that might surprise supporters and critics alike. The green-pass programme worked—not because it proved one’s vaccination status and thereby enabled access to public places, but because it spurred the hesitant to get inoculated. And it worked.\nIn December, when the vaccine first arrived in Israel, it was available for older people who were at higher risk of falling ill. They rushed to roll up their shirtsleeves. Two months later, when vaccines were offered to the under-40s, who were generally less concerned about their health, many fewer people got a jab. For a period, it looked as if there would not be enough people vaccinated to reopen businesses and schools.\nReturning the country to normality was the objective of the green pass. The vaccine, for the most part, is not regarded by the public in terms of an individual, personal goal, but as a communal or national one: to defeat covid-19 as a community. Progress towards this objective, tracked by the green-pass system, is what persuaded younger Israelis to get inoculated. All age groups had something to gain from the vaccine.\nLooking back on the country’s experience with the green pass since the system was introduced in February, one surprise might have been that we were not asked to show it each time we entered a restaurant, shop or museum. Another surprise could have been that the police and local authorities didn’t enforce it, as they had previously ensured that the public wore face-masks and practised social distancing. And we might have been surprised that after receiving our doses and dutifully downloading the passes, almost no one bothered to check them.\nBut these weren’t genuine surprises. There is a popular saying in Israel that “laws are not an obligation, just a recommendation.” Though as a former legislator I am professionally bound to admonish such sentiments, I appreciate them. The idea is that Israelis feel more beholden to the spirit of the rules than to the specific wording of them. We understand what’s meant and act accordingly. And that is what happened with the green pass: the public instinctively understood that more than anything, it was a way to nudge people to get vaccinated, not a way to discriminate against those who had received their doses and those who had not.\nThis communal sentiment explains why in some other countries there is substantial opposition to vaccination certificates, while in Israel there was barely any objection. We accepted it because we suspected that, despite the government campaign, the green pass was not really going to be used and because vaccines were widely available. Instead of dividing people into vaccine haves and have-nots, the green pass brought us together.\nThere are two useful lessons from Israel’s experience. First, vaccine certificates work when they are seen by citizens as incentives to get vaccinated, not as a punishment for those who have not been. Second, strengthening a shared sense of community and responsibility is crucial. Campaigns should take into consideration the specific culture of the community. In Israel, that meant harnessing the public's grasp of the spirit of the rules, not their wording. Other countries will need to deploy vaccine certificates in a way that is right for them. \nToday, life in Israel is returning to what it was like before the pandemic. Covid-19 forced us to live with social distancing, but the remedy led us to appreciate social cohesion. Other countries will emerge from the crisis as well, but the time it takes will depend on the strength of their communities and their willingness to adopt every tool to defeat the virus. For Israel, one such tool was the green pass.\n___________\nRachel Azaria was deputy mayor of Jerusalem in 2013-15 and served as a member of Israel’s parliament, the Knesset, in 2015-19, representing Kulanu (“All of Us”), a centrist party. She is the author of “Guided Revolution” (Kinneret Zmora, 2020), in Hebrew, about social change in Israel.`,
  html: 'ELIDED',
  image: {
    main: {
      type: ['MediaObject', 'ImageObject'],
      url: {
        canonical: 'https://www.economist.com/decimate',
      },
    },
    inline: [
      {
        type: ['MediaObject', 'ImageObject'],
        url: {
          canonical: 'https://www.economist.com/decimate',
        },
      },
    ],
  },
};

const metadata: Metadata = {
  dateFn: () => {},
  articleSection: 'Special report',
  channel: 'j53t6hsedat4l7rkbb1le98u73262sh5',
  title: {
    article: 'A bright future for the world of work',
    print: 'Labour gains',
  },
  byline: '',
  subheadline: 'Subheadline',
  client: 'proquest',
  contentSlice: 'articles',
  copyrightHolder: '',
  copyrightYear: 2021,
  dateCreated: '2021-04-01T11:41:36Z',
  dateModified: '2021-04-08T16:53:26Z',
  datePublished: '2021-04-08T14:48:55Z',
  description:
    'Workers the world over have had a torrid year. But the future is bright, argues Callum Williams',
  issue: {
    volumeNumber: '1',
    issueNumber: '9',
    title: 'Riding high: A special report on the future of work',
    datePublished: faker.date.past().toISOString(),
  },
  tegID: 'pcoe1tl7fvui43ljca6iq9o2mrsiodro',
};

export const metadataBuilder = (
  overridingProperties?: Partial<Metadata>
): Metadata => ({
  ...metadata,
  ...overridingProperties,
});

export const articleBuilder = (
  overridingProperties?: Partial<ArticleResponse>
): ArticleResponse => ({
  ...article,
  ...overridingProperties,
});
