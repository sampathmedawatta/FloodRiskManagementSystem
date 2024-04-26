const { v4: uuidv4 } = require("uuid");
const faqs = [
  {
    id: "0dfe3b7e-df47-4e3b-aa31-1017eb2a68e3",
    title: "FAQ1",
    description: "FAQ description 2024-04-25",
    active: true,
    createdTime: "2024-04-20T12:30:45.678Z",
  },
  {
    id: "0dfe3b7e-df47-4e3b-aa31-1017eb2a68e4",
    title: "FAQ1",
    description: "FAQ description 2024-04-23",
    active: false,
    createdTime: "202-04-02T12:30:45.678Z",
  },
  {
    id: "0dfe3b7e-df47-4e3b-aa31-1017eb2a68e5",
    title: "FAQ1",
    description: "FAQ description 2024-04-22",
    active: false,
    createdTime: "2024-04-22T12:30:45.678Z",
  },
  {
    id: "e93122f5-a668-4920-8956-896a57f12a1f",
    title: "test",
    description: "tetete",
    active: true,
    createdTime: "2024-04-26T06:37:28.642Z",
  },
  {
    id: "49ce57b9-e15c-433e-ad8b-0e7d2b8286c5",
    title:
      "Aut vitae odit aut suscipit tenetur sit quasi earum. Ab quas possimus eos sunt unde aut molestias soluta!",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,",
    active: true,
    createdTime: "2024-04-26T06:39:34.567Z",
  },
  {
    id: "7ad5685f-dc1b-421b-89fb-3f04a0cbb9dd",
    title:
      "corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere",
    active: true,
    createdTime: "2024-04-26T06:40:02.108Z",
  },
  {
    id: "6bd09df5-5325-4a42-8e26-488ebea368cf",
    title: "rrggdg",
    description:
      'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard’s job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex Trebek\'s fun TV quiz game. Woven silk pyjamas exchanged for blue quartz. Brawny gods just flocked up to quiz and vex him. Adjusting quiver and bow, Zompyc[1] killed the fox. My faxed joke won a pager in the cable TV quiz show. Amazingly few discotheques provide jukeboxes. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz. Big July earthquakes confound zany experimental vow. Foxy parsons quiz and cajole the lovably dim wiki-girl. Have a pick: twenty six letters - no forcing a jumbled quiz! Crazy Fredericka bought many very exquisite opal jewels. Sixty zippers were quickly picked from the woven jute bag. A quick movement of the enemy will jeopardize six gunboats. All questions asked by five watch experts amazed the judge. Jack quietly moved up front and seized the big ball of wax.The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my',
    active: true,
    createdTime: "2024-04-26T06:41:11.134Z",
  },
  {
    id: "38355b97-7281-4386-8aac-3d8962685f44",
    title:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm",
    description:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath of that universal love which bears and sustains us, as it floats around us in an eternity of bliss; and then, my friend, when darkness overspreads my eyes, and heaven and earth seem to dwell in my soul and absorb its power, like the form of a beloved mistress, then",
    active: true,
    createdTime: "2024-04-26T06:49:23.055Z",
  },
];

exports.getAllFAQs = (request, response) => {
  response.status(200).json(faqs);
};

exports.getFAQById = (request, response) => {
  const faq = faqs.find((faq) => faq.id == request.params.id);

  if (!faq) {
    return response.status(404).json({ message: "faq not found" });
  }
  response.status(200).json(faq);
};

exports.createFAQ = (request, response) => {
  const { title, description, active } = request.body;

  if (!title) {
    return response.status(422).json({ message: "title is required" });
  }

  //const id = crypto.randomUUID();
  const id = uuidv4();
  console.log(id);
  const date = new Date();
  const createdTime = date.toISOString();
  console.log(createdTime);

  faqs.push({
    id,
    title,
    description,
    active,
    createdTime,
  });

  response.status(201).json({ message: "faq created successfully", id });
};

exports.updateFAQ = (request, response) => {
  const faq = faqs.find((faq) => faq.id === request.params.id);

  if (!faq) {
    return response.status(404).json({ message: "FAQ not found" });
  }

  const { title, description, active } = request.body;

  if (title !== undefined) {
    faq.title = title;
  }

  if (description !== undefined) {
    faq.description = description;
  }

  if (active !== undefined) {
    faq.active = active;
  }

  response.status(200).json({ message: "FAQ updated successfully" });
};

exports.deleteFAQ = (request, response) => {
  const faqIndex = faqs.findIndex((faq) => faq.id == request.params.id);

  if (faqIndex == -1) {
    return response.status(404).json({ message: "faq not found" });
  }

  faqs.splice(faqIndex, 1);

  response.status(200).json({ message: "faq deleted successfully." });
};
