{ header:
   { createdBy:
      '/usr/local/lib/python3.6/dist-packages/alyvant_sales_rep_app/sales_rep_app_object_manager.py',
     createEpoch: 1574197281,
     objectType: 'UpsertProviderRequest',
     refId: 'what is this',
     version: '1',
     uri: 'aly://test' },
  submitterId: 'alyvant_sales_rep_app_object_manager',
  salesRepId: 'b450014c-db55-47e7-8af7-8c9627c81328',
  provider:
   [ { header:
        { createdBy:
           '/usr/local/lib/python3.6/dist-packages/alyvant_sales_rep_app/sales_rep_app_object_manager.py',
          createEpoch: 1574197276,
          objectType: 'Provider',
          refId: 'what is this',
          version: '1',
          uri: 'aly://test' },
       id: '0ac4af17-05df-4b08-89c5-b76f48cf7eb7',
       enumeration_type: 'NPI-1',
       npi_number: 1104897354,
       taxonomies:
        [ { state: 'NJ',
            code: '207Q00000X',
            primary: 'True',
            license: 'MB67638',
            desc: 'Family Medicine' } ],
       basic_info:
        { credential: 'D.O.',
          name: 'Thomas Lozowski',
          first_name: 'Thomas',
          last_name: 'Lozowski',
          middle_name: 'E',
          gender: 'MALE' },
       address:
        [ { address_1: '2446 Church Road',
            city: 'Toms River',
            state: 'NJ',
            postal_code: '08753',
            address_2: '',
            google_geocode:
             { geometry:
                { bounds:
                   { northeast: { lat: 40.0171947, lng: -74.1467808 },
                     southwest: { lat: 40.0168719, lng: -74.1473178 } },
                  location: { lat: 40.017033, lng: -74.1470717 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 40.0183822802915, lng: -74.1457003197085 },
                     southwest: { lat: 40.0156843197085, lng: -74.1483982802915 } } },
               place_id: 'ChIJjUxvBLacwYkRFPe6iddq5Es' },
            telephone_number: '732-255-3636',
            times:
             [ { days: [ 1, 2, 3, 4 ],
                 hours: [ { start: '0900', end: '1700' } ] },
               { days: [ 5 ], hours: [ { start: '0900', end: '1300' } ] } ] } ],
       physician_info:
        { education_training: [ 'Philadelphia College Of Osteopathic Medicine, 1997' ],
          hospital_affiliations:
           [ 'Dichiara, Frank, Medical Group',
             'Community Medical Center',
             'Meridian Nursing And Rehabilitation At Brick',
             'Ocean Medical Center' ] },
       relationship: {},
       alyvant_insights:
        [ { header: 'Samples Dropped',
            body: 'HCP received 3 sample(s) in June 2019' },
          { header: 'Calls Received',
            body: 'HCP received 2 call(s) in June 2019' },
          { header: 'ALK Calls',
            body: 'Received 0 ALK Odactra Calls in 2018' },
          { header: 'NJ License',
            body: 'Has a valid medical license in the state of New Jersey' } ],
       patient_info:
        [ { title: '12 Month Claims Data',
            rows:
             [ { key: 'SCIT Claims 2018', value: '166' },
               { key: 'SLIT Claims Last 12 Months', value: '6' },
               { key: 'Allergy Test Claims 2018', value: '18' },
               { key: 'Other Allergic Rhinitis TRx Claims 2018', value: '82' } ] },
          { title: 'In Promotional Period',
            rows:
             [ { key: 'Savings Card Redemptions (as of 11/4)', value: '2' },
               { key: 'ALK Product Prescriptions (as of 10/25)', value: '6' } ] } ],
       products: [],
       call_log_form_id: 'immutableFormID',
       is_active: true,
       signals: [] },
     { header:
        { createdBy:
           '/usr/local/lib/python3.6/dist-packages/alyvant_sales_rep_app/sales_rep_app_object_manager.py',
          createEpoch: 1574197276,
          objectType: 'Provider',
          refId: 'what is this',
          version: '1',
          uri: 'aly://test' },
       id: '9d6ba026-53b1-402b-8f49-a7e558a52d78',
       enumeration_type: 'NPI-1',
       npi_number: 1962404558,
       taxonomies:
        [ { state: 'NJ',
            code: '207Y00000X',
            primary: 'True',
            license: 'MA52771',
            desc: 'Otolaryngology' } ],
       basic_info:
        { credential: 'M.D.',
          name: 'Jeffrey Lebenger',
          first_name: 'Jeffrey',
          last_name: 'Lebenger',
          middle_name: 'D',
          gender: 'MALE' },
       address:
        [ { recipient: 'Berkeley Heights Campus/Lawrence Pavillion',
            address_2: '2nd Floor',
            address_1: '1 Diamond Hill Road',
            city: 'Berkeley Heights',
            state: 'NJ',
            postal_code: '07922',
            google_geocode:
             { geometry:
                { location: { lat: 40.6780337, lng: -74.4121498 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 40.6793826802915, lng: -74.41080081970848 },
                     southwest: { lat: 40.6766847197085, lng: -74.4134987802915 } } },
               place_id: 'ChIJ16ABI6K6w4kRDsgeFEiWNso' },
            telephone_number: '908-277-8681' } ],
       physician_info:
        { education_training: [ 'New York Medical College, 1984' ],
          hospital_affiliations:
           [ 'Summit Medical Group Berkeley Heights Campus',
             'Summit Medical Group',
             'Summit Medical Group Livingston',
             'Overlook Medical Center',
             'Summit Medical Group Warren' ] },
       relationship: {},
       alyvant_insights:
        [ { header: 'Samples Dropped',
            body: 'HCP did not receive any samples in June 2019' },
          { header: 'Calls Received',
            body: 'HCP received 0 call(s) in June 2019' },
          { header: 'ALK Calls',
            body: 'Received 3 ALK Odactra Calls in 2018' },
          { header: 'Current ALK Overlap',
            body:
             'This HCP is affiliated with a practice that ALK is also targeting' },
          { header: 'NJ License',
            body: 'Has a valid medical license in the state of New Jersey' } ],
       patient_info:
        [ { title: '12 Month Claims Data',
            rows:
             [ { key: 'SCIT Claims 2018', value: '990 (projected)' },
               { key: 'SLIT Claims Last 12 Months', value: '0' },
               { key: 'Allergy Test Claims 2018', value: '0' },
               { key: 'Other Allergic Rhinitis TRx Claims 2018', value: '4' } ] },
          { title: 'In Promotional Period',
            rows:
             [ { key: 'Savings Card Redemptions (as of 11/4)', value: '0' },
               { key: 'ALK Product Prescriptions (as of 10/25)', value: '0' } ] } ],
       products: [],
       call_log_form_id: 'immutableFormID',
       is_active: true,
       signals: [] },
     { header:
        { createdBy:
           '/usr/local/lib/python3.6/dist-packages/alyvant_sales_rep_app/sales_rep_app_object_manager.py',
          createEpoch: 1574197276,
          objectType: 'Provider',
          refId: 'what is this',
          version: '1',
          uri: 'aly://test' },
       id: '8151eba4-b283-4a9c-b634-cf07637102a1',
       enumeration_type: 'NPI-1',
       npi_number: 1972527950,
       taxonomies:
        [ { state: 'NJ',
            code: '207RP1001X',
            primary: 'True',
            license: '25MA04785700',
            desc: 'Internal Medicine Pulmonary Disease' } ],
       basic_info:
        { name: 'Mazhar Elamir',
          first_name: 'Mazhar',
          last_name: 'Elamir',
          gender: 'MALE' },
       address:
        [ { address_1: '192 Harrison Avenue',
            city: 'Jersey City',
            state: 'NJ',
            postal_code: '07304',
            address_2: '',
            google_geocode:
             { geometry:
                { bounds:
                   { northeast: { lat: 40.72023480000001, lng: -74.0766594 },
                     southwest: { lat: 40.7200228, lng: -74.0768944 } },
                  location: { lat: 40.7201592, lng: -74.0767576 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 40.7214777802915, lng: -74.0754279197085 },
                     southwest: { lat: 40.71877981970851, lng: -74.07812588029151 } } },
               place_id: 'ChIJbZeZ4NdQwokR96q71DXgMCc' },
            telephone_number: '201-333-5363',
            times:
             [ { days: [ 1, 2, 3, 4, 5 ],
                 hours: [ { start: '1200', end: '1830' } ] } ] } ],
       physician_info:
        { education_training: [ 'University Of Cairo Faculty Of Medicine, 1981' ],
          hospital_affiliations:
           [ 'Mm Jersey City Breathing Center',
             'Christ Hospital',
             'Hoboken University Medical Center',
             'Jersey City Medical Center' ] },
       relationship: {},
       alyvant_insights:
        [ { header: 'Calls Received',
            body: 'HCP received 4 call(s) in June 2019' },
          { header: 'ALK Calls',
            body: 'Received 0 ALK Odactra Calls in 2018' },
          { header: 'More Likely to Treat Symptoms vs. Cause',
            body:
             'Had relatively high alternative TRx Claims to SCIT Claims ratio in 2018' },
          { header: 'Current ALK Overlap',
            body:
             'This HCP is affiliated with a practice that ALK is also targeting' },
          { header: 'NJ License',
            body: 'Has a valid medical license in the state of New Jersey' } ],
       patient_info:
        [ { title: '12 Month Claims Data',
            rows:
             [ { key: 'SCIT Claims 2018', value: '146' },
               { key: 'SLIT Claims Last 12 Months', value: '0' },
               { key: 'Allergy Test Claims 2018', value: '1' },
               { key: 'Other Allergic Rhinitis TRx Claims 2018', value: '430' } ] },
          { title: 'In Promotional Period',
            rows:
             [ { key: 'Savings Card Redemptions (as of 11/4)', value: '0' },
               { key: 'ALK Product Prescriptions (as of 10/25)', value: '0' } ] } ],
       products: [],
       call_log_form_id: 'immutableFormID',
       is_active: true,
       signals: [] },
     { header:
        { createdBy:
           '/usr/local/lib/python3.6/dist-packages/alyvant_sales_rep_app/sales_rep_app_object_manager.py',
          createEpoch: 1574197276,
          objectType: 'Provider',
          refId: 'what is this',
          version: '1',
          uri: 'aly://test' },
       id: 'db8a3e7d-6fb9-4d05-9912-125aa068bbac',
       enumeration_type: 'NPI-1',
       npi_number: 1649337296,
       taxonomies:
        [ { state: 'NJ',
            code: '207R00000X',
            primary: 'True',
            license: '25MA03962400',
            desc: 'Internal Medicine' } ],
       basic_info:
        { credential: 'M.D.',
          name: 'Nitin Parikh',
          first_name: 'Nitin',
          last_name: 'Parikh',
          gender: 'MALE' },
       address:
        [ { address_1: '3368 John F. Kennedy Boulevard',
            city: 'Jersey City',
            state: 'NJ',
            postal_code: '07307',
            address_2: '',
            google_geocode:
             { geometry:
                { bounds:
                   { northeast: { lat: 40.7474849, lng: -74.056017 },
                     southwest: { lat: 40.74736619999999, lng: -74.0561913 } },
                  location: { lat: 40.747443, lng: -74.0561057 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 40.74877453029149, lng: -74.05475516970849 },
                     southwest: { lat: 40.74607656970849, lng: -74.0574531302915 } } },
               place_id: 'ChIJNSnNCBVXwokRX1DFXGaSKDQ' },
            telephone_number: '201-656-8811',
            times:
             [ { days: [ 2, 4 ], hours: [ { start: '1600', end: '2000' } ] },
               { days: [ 3 ], hours: [ { start: '1000', end: '1300' } ] },
               { days: [ 5 ], hours: [ { start: '1200', end: '1800' } ] } ] } ],
       physician_info:
        { education_training: [ 'Topiwala National Medical College, 1979' ],
          hospital_affiliations: [ 'Apex Medical Associates' ] },
       relationship: {},
       alyvant_insights:
        [ { header: 'Samples Dropped',
            body: 'HCP did not receive any samples in June 2019' },
          { header: 'Calls Received',
            body: 'HCP received 0 call(s) in June 2019' },
          { header: 'ALK Calls',
            body: 'Received 0 ALK Odactra Calls in 2018' },
          { header: 'More Likely to Perform Test',
            body:
             'Had a relatively low SCIT to allergy test claims ratio in 2018' },
          { header: 'NJ License',
            body: 'Has a valid medical license in the state of New Jersey' } ],
       patient_info:
        [ { title: '12 Month Claims Data',
            rows:
             [ { key: 'SCIT Claims 2018', value: '187' },
               { key: 'SLIT Claims Last 12 Months', value: '0' },
               { key: 'Allergy Test Claims 2018', value: '45' },
               { key: 'Other Allergic Rhinitis TRx Claims 2018', value: '4' } ] },
          { title: 'In Promotional Period',
            rows:
             [ { key: 'Savings Card Redemptions (as of 11/4)', value: '0' },
               { key: 'ALK Product Prescriptions (as of 10/25)', value: '0' } ] } ],
       products: [],
       call_log_form_id: 'immutableFormID',
       is_active: true,
       signals: [] },
     { header:
        { createdBy:
           '/usr/local/lib/python3.6/dist-packages/alyvant_sales_rep_app/sales_rep_app_object_manager.py',
          createEpoch: 1574197276,
          objectType: 'Provider',
          refId: 'what is this',
          version: '1',
          uri: 'aly://test' },
       id: 'a65092ce-af3c-414b-848e-0ee0c380b7ce',
       enumeration_type: 'NPI-1',
       npi_number: 1255307989,
       taxonomies:
        [ { state: 'NJ',
            code: '207Y00000X',
            primary: 'True',
            license: '25MA08378800',
            desc: 'Otolaryngology' } ],
       basic_info:
        { credential: 'M.D.',
          name: 'Laurence Milgrim',
          first_name: 'Laurence',
          last_name: 'Milgrim',
          middle_name: 'M.',
          gender: 'MALE' },
       address:
        [ { address_1: '1 Ruckman Road',
            city: 'Closter',
            state: 'NJ',
            postal_code: '07624',
            address_2: '',
            google_geocode:
             { geometry:
                { location: { lat: 40.9736331, lng: -73.9594591 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 40.9749820802915, lng: -73.9581101197085 },
                     southwest: { lat: 40.9722841197085, lng: -73.9608080802915 } } },
               place_id: 'ChIJf77w9GnuwokR_4qXcoaEUNM' },
            telephone_number: '201-385-6161',
            times:
             [ { days: [ 1, 2, 3, 4 ],
                 hours: [ { start: '0900', end: '1700' } ] },
               { days: [ 5 ], hours: [ { start: '0900', end: '1500' } ] } ] } ],
       physician_info:
        { education_training: [ 'Rutgers Robert Wood Johnson Medical School, 1989' ],
          hospital_affiliations:
           [ 'Holy Name Medical Center',
             'Northern Jersey Ear Nose And Throat',
             'Flushing Hospital Medical Center',
             'North Jersey Ear Nose And Throat Associates' ] },
       relationship: {},
       alyvant_insights:
        [ { header: 'Samples Dropped',
            body: 'HCP did not receive any samples in June 2019' },
          { header: 'Calls Received',
            body: 'HCP received 2 call(s) in June 2019' },
          { header: 'ALK Calls',
            body: 'Received 0 ALK Odactra Calls in 2018' },
          { header: 'NJ License',
            body: 'Has a valid medical license in the state of New Jersey' } ],
       patient_info:
        [ { title: '12 Month Claims Data',
            rows:
             [ { key: 'SCIT Claims 2018', value: 'Restricted' },
               { key: 'SLIT Claims Last 12 Months', value: 'Restricted' },
               { key: 'Allergy Test Claims 2018', value: 'Restricted' },
               { key: 'Other Allergic Rhinitis TRx Claims 2018',
                 value: 'Restricted' } ] },
          { title: 'In Promotional Period',
            rows:
             [ { key: 'Savings Card Redemptions (as of 11/4)',
                 value: 'Restricted' },
               { key: 'ALK Product Prescriptions (as of 10/25)',
                 value: 'Restricted' } ] } ],
       products: [],
       call_log_form_id: 'immutableFormID',
       is_active: true,
       signals: [] },
     { header:
        { createdBy:
           '/usr/local/lib/python3.6/dist-packages/alyvant_sales_rep_app/sales_rep_app_object_manager.py',
          createEpoch: 1574197277,
          objectType: 'Provider',
          refId: 'what is this',
          version: '1',
          uri: 'aly://test' },
       id: '27203a36-3b05-41c6-bb40-078b9bb6bcaa',
       enumeration_type: 'NPI-1',
       npi_number: 1508857814,
       taxonomies:
        [ { state: 'NJ',
            code: '174400000X',
            primary: 'True',
            license: 'MA41970',
            desc: 'Specialist' } ],
       basic_info:
        { credential: 'M.D.',
          name: 'Harry Katz',
          first_name: 'Harry',
          last_name: 'Katz',
          gender: 'MALE' },
       address:
        [ { address_1: '85 Harristown Road',
            address_2: 'Suite 105',
            city: 'Glen Rock',
            state: 'NJ',
            postal_code: '07452',
            google_geocode:
             { geometry:
                { bounds:
                   { northeast: { lat: 40.9496832, lng: -74.1423385 },
                     southwest: { lat: 40.94911460000001, lng: -74.1430851 } },
                  location: { lat: 40.9494537, lng: -74.1426219 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 40.95074788029151, lng: -74.14136281970848 },
                     southwest: { lat: 40.94804991970851, lng: -74.14406078029148 } } },
               place_id:
                'Ei8xMDUsIDg1IEhhcnJpc3Rvd24gUmQsIEdsZW4gUm9jaywgTkogMDc0NTIsIFVTQSIfGh0KFgoUChIJR05265P8wokRyrs83M4Jh5ESAzEwNQ' },
            telephone_number: '201-445-2900',
            times:
             [ { days: [ 1, 2, 3, 4 ],
                 hours: [ { start: '0900', end: '1700' } ] },
               { days: [ 5 ], hours: [ { start: '0900', end: '1300' } ] } ] } ],
       physician_info:
        { education_training: [ 'New York University School Of Medicine, 1977' ],
          hospital_affiliations:
           [ 'Holy Name Medical Center',
             'Northern Jersey Ear Nose And Throat' ] },
       relationship: {},
       alyvant_insights:
        [ { header: 'Samples Dropped',
            body: 'HCP did not receive any samples in June 2019' },
          { header: 'Calls Received',
            body: 'HCP received 1 call(s) in June 2019' },
          { header: 'ALK Calls',
            body: 'Received 0 ALK Odactra Calls in 2018' },
          { header: 'NJ License',
            body: 'Has a valid medical license in the state of New Jersey' } ],
       patient_info:
        [ { title: '12 Month Claims Data',
            rows:
             [ { key: 'SCIT Claims 2018', value: 'Restricted' },
               { key: 'SLIT Claims Last 12 Months', value: 'Restricted' },
               { key: 'Allergy Test Claims 2018', value: 'Restricted' },
               { key: 'Other Allergic Rhinitis TRx Claims 2018',
                 value: 'Restricted' } ] },
          { title: 'In Promotional Period',
            rows:
             [ { key: 'Savings Card Redemptions (as of 11/4)',
                 value: 'Restricted' },
               { key: 'ALK Product Prescriptions (as of 10/25)',
                 value: 'Restricted' } ] } ],
       products: [],
       call_log_form_id: 'immutableFormID',
       is_active: true,
       signals: [] },
     { header:
        { createdBy:
           '/usr/local/lib/python3.6/dist-packages/alyvant_sales_rep_app/sales_rep_app_object_manager.py',
          createEpoch: 1574197277,
          objectType: 'Provider',
          refId: 'what is this',
          version: '1',
          uri: 'aly://test' },
       id: '31a795b2-e3cb-4f36-bcfd-fece661f098e',
       enumeration_type: 'NPI-1',
       npi_number: 1538163928,
       taxonomies:
        [ { state: 'NJ',
            code: '207R00000X',
            primary: 'True',
            license: 'MA70300',
            desc: 'Internal Medicine' } ],
       basic_info:
        { credential: 'M.D.',
          name: 'Lisa Granado',
          first_name: 'Lisa',
          last_name: 'Granado',
          middle_name: 'M. Golding',
          gender: 'FEMALE' },
       address:
        [ { recipient: 'Immediate Care Golding Granado Medical Assoc.',
            address_1: '1376 State Route 36',
            city: 'Hazlet',
            state: 'NJ',
            postal_code: '07730',
            address_2: '',
            google_geocode:
             { geometry:
                { location: { lat: 40.4284593, lng: -74.1878905 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 40.4298082802915, lng: -74.18654151970848 },
                     southwest: { lat: 40.4271103197085, lng: -74.1892394802915 } } },
               place_id: 'ChIJu7x31J00wokRFBz9cSDpTZE' },
            telephone_number: '732-264-5554',
            times:
             [ { days: [ 1, 2, 3, 4, 5 ],
                 hours: [ { start: '0700', end: '2000' } ] } ] } ],
       physician_info:
        { education_training: [ 'Weill Cornell Medical College, 1997' ],
          hospital_affiliations: [ 'Immediate Care', 'Riverview Medical Center' ] },
       relationship: {},
       alyvant_insights:
        [ { header: 'Calls Received',
            body: 'HCP received 0 call(s) in June 2019' },
          { header: 'ALK Calls',
            body: 'Received 0 ALK Odactra Calls in 2018' },
          { header: 'More Likely to Perform Test',
            body:
             'Had a relatively low SCIT to allergy test claims ratio in 2018' },
          { header: 'More Likely to Treat Symptoms vs. Cause',
            body:
             'Had relatively high alternative TRx Claims to SCIT Claims ratio in 2018' },
          { header: 'NJ License',
            body: 'Has a valid medical license in the state of New Jersey' } ],
       patient_info:
        [ { title: '12 Month Claims Data',
            rows:
             [ { key: 'SCIT Claims 2018', value: '101' },
               { key: 'SLIT Claims Last 12 Months', value: '0' },
               { key: 'Allergy Test Claims 2018', value: '26' },
               { key: 'Other Allergic Rhinitis TRx Claims 2018', value: '109' } ] },
          { title: 'In Promotional Period',
            rows:
             [ { key: 'Savings Card Redemptions (as of 11/4)', value: '0' },
               { key: 'ALK Product Prescriptions (as of 10/25)', value: '0' } ] } ],
       products: [],
       call_log_form_id: 'immutableFormID',
       is_active: true,
       signals: [] },
     { header:
        { createdBy:
           '/usr/local/lib/python3.6/dist-packages/alyvant_sales_rep_app/sales_rep_app_object_manager.py',
          createEpoch: 1574197277,
          objectType: 'Provider',
          refId: 'what is this',
          version: '1',
          uri: 'aly://test' },
       id: '6e880f5d-395c-421a-b9c9-448d95240d2a',
       enumeration_type: 'NPI-1',
       npi_number: 1437198553,
       taxonomies:
        [ { state: 'NJ',
            code: '207YX0905X',
            primary: 'True',
            license: '25MA04775300',
            desc: 'Otolaryngology Otolaryngology/Facial Plastic Surgery' },
          { state: 'NJ',
            code: '207Y00000X',
            primary: 'False',
            license: 'MA047753',
            desc: 'Otolaryngology' } ],
       basic_info:
        { credential: 'M.D.',
          name: 'John Cece',
          first_name: 'John',
          last_name: 'Cece',
          middle_name: 'A',
          gender: 'MALE' },
       address:
        [ { address_1: '1211 Hamburg Turnpike',
            address_2: 'Suite 205',
            city: 'Wayne',
            state: 'NJ',
            postal_code: '07470',
            google_geocode:
             { geometry:
                { bounds:
                   { northeast: { lat: 40.9605173, lng: -74.24437019999999 },
                     southwest: { lat: 40.9600676, lng: -74.2449596 } },
                  location: { lat: 40.9603605, lng: -74.2446187 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 40.96164143029149, lng: -74.2433159197085 },
                     southwest: { lat: 40.95894346970849, lng: -74.2460138802915 } } },
               place_id:
                'EjAyMDUsIDEyMTEgSGFtYnVyZyBUdXJucGlrZSwgV2F5bmUsIE5KIDA3NDcwLCBVU0EiHxodChYKFAoSCdEqTYPtAsOJEbb3IfFgPVZREgMyMDU' },
            telephone_number: '973-633-0808',
            times:
             [ { days: [ 1 ], hours: [ { start: '1200', end: '1900' } ] },
               { days: [ 2 ], hours: [ { start: '0830', end: '1900' } ] },
               { days: [ 3 ], hours: [ { start: '1500', end: '1900' } ] },
               { days: [ 4, 5 ], hours: [ { start: '0830', end: '1700' } ] } ] } ],
       physician_info:
        { education_training: [ 'Rutgers Robert Wood Johnson Medical School, 1981' ],
          hospital_affiliations:
           [ 'Kindred Hospital New Jersey Wayne',
             'Ent And Allergy Associates Wayne',
             'Saint Josephs Wayne Hospital' ] },
       relationship: {},
       alyvant_insights:
        [ { header: 'Samples Dropped',
            body: 'HCP did not receive any samples in June 2019' },
          { header: 'Calls Received',
            body: 'HCP received 3 call(s) in June 2019' },
          { header: 'ALK Calls',
            body: 'Received 0 ALK Odactra Calls in 2018' },
          { header: 'NJ License',
            body: 'Has a valid medical license in the state of New Jersey' } ],
       patient_info:
        [ { title: '12 Month Claims Data',
            rows:
             [ { key: 'SCIT Claims 2018', value: '1720 (projected)' },
               { key: 'SLIT Claims Last 12 Months', value: '0' },
               { key: 'Allergy Test Claims 2018', value: '0' },
               { key: 'Other Allergic Rhinitis TRx Claims 2018', value: '112' } ] },
          { title: 'In Promotional Period',
            rows:
             [ { key: 'Savings Card Redemptions (as of 11/4)', value: '0' },
               { key: 'ALK Product Prescriptions (as of 10/25)', value: '0' } ] } ],
       products: [],
       call_log_form_id: 'immutableFormID',
       is_active: true,
       signals: [] },
     { header:
        { createdBy:
           '/usr/local/lib/python3.6/dist-packages/alyvant_sales_rep_app/sales_rep_app_object_manager.py',
          createEpoch: 1574197277,
          objectType: 'Provider',
          refId: 'what is this',
          version: '1',
          uri: 'aly://test' },
       id: '76996d41-5548-4d07-acec-53d2dba223b6',
       enumeration_type: 'NPI-1',
       npi_number: 1740235225,
       taxonomies:
        [ { state: 'NJ',
            code: '207R00000X',
            primary: 'True',
            license: 'MA07622500',
            desc: 'Internal Medicine' } ],
       basic_info:
        { credential: 'M.D.',
          name: 'Alber Moussa',
          first_name: 'Alber',
          last_name: 'Moussa',
          gender: 'MALE' },
       address:
        [ { address_1: '73 Brunswick Woods Drive',
            city: 'East Brunswick',
            state: 'NJ',
            postal_code: '08816',
            address_2: '',
            google_geocode:
             { geometry:
                { location: { lat: 40.4218133, lng: -74.3912843 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 40.4231622802915, lng: -74.3899353197085 },
                     southwest: { lat: 40.4204643197085, lng: -74.3926332802915 } } },
               place_id: 'ChIJw0YY3nDPw4kRdSZzb0UUb28' },
            telephone_number: '732-698-9009',
            times:
             [ { days: [ 1, 2, 4, 5 ],
                 hours: [ { start: '1000', end: '1600' } ] },
               { days: [ 3 ], hours: [ { start: '1000', end: '1800' } ] },
               { days: [ 6 ], hours: [ { start: '1000', end: '1300' } ] } ] } ],
       physician_info:
        { education_training: [ 'Ain Shams University Faculty Of Medicine, 1983' ],
          hospital_affiliations:
           [ 'Summer Hill Nursing And Rehab Center',
             'Raritan Bay Medical Center Old Bridge Division',
             'Careone At East Brunswick',
             'Brunswick Medical',
             'Saint Peters Healthcare System' ] },
       relationship: {},
       alyvant_insights:
        [ { header: 'Samples Dropped',
            body: 'HCP did not receive any samples in June 2019' },
          { header: 'Calls Received',
            body: 'HCP received 0 call(s) in June 2019' },
          { header: 'ALK Calls',
            body: 'Received 0 ALK Odactra Calls in 2018' },
          { header: 'NJ License',
            body: 'Has a valid medical license in the state of New Jersey' } ],
       patient_info:
        [ { title: '12 Month Claims Data',
            rows:
             [ { key: 'SCIT Claims 2018', value: '105' },
               { key: 'SLIT Claims Last 12 Months', value: '0' },
               { key: 'Allergy Test Claims 2018', value: '1' },
               { key: 'Other Allergic Rhinitis TRx Claims 2018', value: '61' } ] },
          { title: 'In Promotional Period',
            rows:
             [ { key: 'Savings Card Redemptions (as of 11/4)', value: '0' },
               { key: 'ALK Product Prescriptions (as of 10/25)', value: '0' } ] } ],
       products: [],
       call_log_form_id: 'immutableFormID',
       is_active: true,
       signals: [] },
     { header:
        { createdBy:
           '/usr/local/lib/python3.6/dist-packages/alyvant_sales_rep_app/sales_rep_app_object_manager.py',
          createEpoch: 1574197277,
          objectType: 'Provider',
          refId: 'what is this',
          version: '1',
          uri: 'aly://test' },
       id: 'e172546f-f56c-45dc-8112-567fa238089e',
       enumeration_type: 'NPI-1',
       npi_number: 1154352987,
       taxonomies:
        [ { state: 'NJ',
            code: '207KI0005X',
            primary: 'True',
            license: '25MA04594700',
            desc: 'Allergy & Immunology Clinical & Laboratory Immunology' } ],
       basic_info:
        { credential: 'M.D.',
          name: 'Leonard Bielory',
          first_name: 'Leonard',
          last_name: 'Bielory',
          gender: 'MALE' },
       address:
        [ { address_1: '400 Mountain Avenue',
            city: 'Springfield',
            state: 'NJ',
            postal_code: '07081',
            address_2: '',
            google_geocode:
             { geometry:
                { bounds:
                   { northeast: { lat: 40.7003731, lng: -74.3220905 },
                     southwest: { lat: 40.7000613, lng: -74.32247819999999 } },
                  location: { lat: 40.7002184, lng: -74.3222248 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 40.7015661802915, lng: -74.3209353697085 },
                     southwest: { lat: 40.6988682197085, lng: -74.3236333302915 } } },
               place_id: 'ChIJTxXjlA2uw4kRBuX1JuGQy-o' },
            telephone_number: '973-912-9817',
            times:
             [ { days: [ 2, 4 ], hours: [ { start: '0900', end: '1700' } ] },
               { days: [ 3 ], hours: [ { start: '1300', end: '1800' } ] } ] } ],
       physician_info:
        { education_training: [ 'Rutgers New Jersey Medical School, 1980' ],
          hospital_affiliations:
           [ 'Saint Barnabas Medical Center',
             'Newark Beth Israel Medical Center',
             'Star X Allergy And Asthma Center, Llc',
             'Bielory, Leonard, Office',
             'University Hospital' ] },
       relationship: {},
       alyvant_insights:
        [ { header: 'Savings Card Activity',
            body: 'Doctor\'s patient has used a savings card in 2019' },
          { header: 'Samples Dropped',
            body: 'HCP did not receive any samples in June 2019' },
          { header: 'Calls Received',
            body: 'HCP received 2 call(s) in June 2019' },
          { header: 'ALK Calls',
            body: 'Received 3 ALK Odactra Calls in 2018' },
          { header: 'NJ License',
            body: 'Has a valid medical license in the state of New Jersey' } ],
       patient_info:
        [ { title: '12 Month Claims Data',
            rows:
             [ { key: 'SCIT Claims 2018', value: '508' },
               { key: 'SLIT Claims Last 12 Months', value: '1' },
               { key: 'Allergy Test Claims 2018', value: '48' },
               { key: 'Other Allergic Rhinitis TRx Claims 2018', value: '40' } ] },
          { title: 'In Promotional Period',
            rows:
             [ { key: 'Savings Card Redemptions (as of 11/4)', value: '1' },
               { key: 'ALK Product Prescriptions (as of 10/25)', value: '1' } ] } ],
       products: [],
       call_log_form_id: 'immutableFormID',
       is_active: true,
       signals: [] },
     { header:
        { createdBy:
           '/usr/local/lib/python3.6/dist-packages/alyvant_sales_rep_app/sales_rep_app_object_manager.py',
          createEpoch: 1574197277,
          objectType: 'Provider',
          refId: 'what is this',
          version: '1',
          uri: 'aly://test' },
       id: '90a1b9af-48e0-423c-936f-8eccc271e8ce',
       enumeration_type: 'NPI-1',
       npi_number: 1780663898,
       taxonomies:
        [ { state: 'NJ',
            code: '207R00000X',
            primary: 'True',
            license: 'MA70894',
            desc: 'Internal Medicine' } ],
       basic_info:
        { credential: 'M.D.',
          name: 'Kumar Ramdas',
          first_name: 'Kumar',
          last_name: 'Ramdas',
          middle_name: 'M',
          gender: 'MALE' },
       address:
        [ { address_1: '14 Franklin St',
            city: 'Belleville',
            state: 'NJ',
            postal_code: '07109',
            address_2: '',
            google_geocode:
             { geometry:
                { location: { lat: 40.7791506, lng: -74.1770853 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 40.7804995802915, lng: -74.17573631970849 },
                     southwest: { lat: 40.7778016197085, lng: -74.1784342802915 } } },
               place_id: 'ChIJHUPCJvxUwokRw2LGScrEj3U' },
            telephone_number: '973-450-5200',
            times:
             [ { days: [ 1, 2, 4, 5 ],
                 hours: [ { start: '0900', end: '1700' } ] } ] },
          { address_1: '90 Washington Street',
            address_2: '308',
            city: 'East Orange',
            state: 'NJ',
            postal_code: '07017',
            google_geocode:
             { geometry:
                { location: { lat: 40.7729095, lng: -74.2197493 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 40.7742584802915, lng: -74.21840031970851 },
                     southwest: { lat: 40.7715605197085, lng: -74.22109828029151 } } },
               place_id: 'ChIJIws0lzSrw4kRJkcy4k6K9I8' },
            telephone_number: '973-677-3300',
            times:
             [ { days: [ 2 ], hours: [ { start: '1400', end: '1700' } ] } ] },
          { address_1: '636 Bayway Ave',
            city: 'Elizabeth',
            state: 'NJ',
            postal_code: '07202',
            address_2: '',
            google_geocode:
             { geometry:
                { bounds:
                   { northeast: { lat: 40.6464156, lng: -74.2151322 },
                     southwest: { lat: 40.6461708, lng: -74.2154471 } },
                  location: { lat: 40.6462801, lng: -74.21529579999999 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 40.6476421802915, lng: -74.21394066970849 },
                     southwest: { lat: 40.6449442197085, lng: -74.2166386302915 } } },
               place_id: 'ChIJXS28-TRNwokRb4UY5-GHLzY' },
            telephone_number: '908-994-1900' },
          { address_1: '34 Park Ave',
            city: 'Newark',
            state: 'NJ',
            postal_code: '07104',
            address_2: '',
            google_geocode:
             { geometry:
                { bounds:
                   { northeast: { lat: 40.7552372, lng: -74.17435689999999 },
                     southwest: { lat: 40.75507109999999, lng: -74.1744741 } },
                  location: { lat: 40.7551363, lng: -74.1744332 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 40.75650313029149, lng: -74.17306651970848 },
                     southwest: { lat: 40.75380516970849, lng: -74.1757644802915 } } },
               place_id: 'ChIJyeW6A4lUwokRc2jCZYKAMrE' },
            telephone_number: '973-497-0554' } ],
       physician_info:
        { education_training: [ 'Volgograd State Medical University, 1990' ],
          hospital_affiliations:
           [ 'Plaza Health Care And Rehabilitation Center',
             'Cranford Park Rehabilitation And Healthcare Center',
             'Pain Therapy Medical Care',
             'Careone Ltach At Trinitas Regional Medical Center',
             'Elmora Hills Healthcare And Rehabilitation Center' ] },
       relationship: {},
       alyvant_insights:
        [ { header: 'Calls Received',
            body: 'HCP received 2 call(s) in June 2019' },
          { header: 'ALK Calls',
            body: 'Received 0 ALK Odactra Calls in 2018' },
          { header: 'More Likely to Perform Test',
            body:
             'Had a relatively low SCIT to allergy test claims ratio in 2018' },
          { header: 'More Likely to Treat Symptoms vs. Cause',
            body:
             'Had relatively high alternative TRx Claims to SCIT Claims ratio in 2018' },
          { header: 'NJ License',
            body: 'Has a valid medical license in the state of New Jersey' } ],
       patient_info:
        [ { title: '12 Month Claims Data',
            rows:
             [ { key: 'SCIT Claims 2018', value: '77' },
               { key: 'SLIT Claims Last 12 Months', value: '0' },
               { key: 'Allergy Test Claims 2018', value: '22' },
               { key: 'Other Allergic Rhinitis TRx Claims 2018', value: '230' } ] },
          { title: 'In Promotional Period',
            rows:
             [ { key: 'Savings Card Redemptions (as of 11/4)', value: '1' },
               { key: 'ALK Product Prescriptions (as of 10/25)', value: '0' } ] } ],
       products: [],
       call_log_form_id: 'immutableFormID',
       is_active: true,
       signals: [] },
     { header:
        { createdBy:
           '/usr/local/lib/python3.6/dist-packages/alyvant_sales_rep_app/sales_rep_app_object_manager.py',
          createEpoch: 1574197278,
          objectType: 'Provider',
          refId: 'what is this',
          version: '1',
          uri: 'aly://test' },
       id: '41affe9d-a782-45f3-841f-c2c93e5cde81',
       enumeration_type: 'NPI-1',
       npi_number: 1861512030,
       taxonomies:
        [ { state: 'NJ',
            code: '207Q00000X',
            primary: 'True',
            license: '25MA08749500',
            desc: 'Family Medicine' },
          { state: 'PA',
            code: '207Q00000X',
            primary: 'False',
            license: 'MD438205',
            desc: 'Family Medicine' } ],
       basic_info:
        { credential: 'M.D.',
          name: 'Michael Klele',
          first_name: 'Michael',
          last_name: 'Klele',
          middle_name: 'A.',
          gender: 'MALE' },
       address:
        [ { recipient: 'Family Care',
            address_1: '257 US-22 East',
            city: 'Green Brook',
            state: 'NJ',
            postal_code: '08812',
            address_2: '',
            google_geocode:
             { geometry:
                { location: { lat: 40.594105, lng: -74.4920865 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 40.5954539802915, lng: -74.4907375197085 },
                     southwest: { lat: 40.5927560197085, lng: -74.49343548029151 } } },
               place_id: 'ChIJR6QEuC65w4kRrVNbVdBCNwY' },
            telephone_number: '732-968-7878' } ],
       physician_info:
        { education_training: [ 'St Christopher Iba Mar Diop College Of Medicine, 2005' ],
          hospital_affiliations: [ 'Null' ] },
       relationship: {},
       alyvant_insights:
        [ { header: 'Savings Card Activity',
            body: 'Doctor\'s patient has used a savings card in 2019' },
          { header: 'Samples Dropped',
            body: 'HCP did not receive any samples in June 2019' },
          { header: 'Calls Received',
            body: 'HCP received 3 call(s) in June 2019' },
          { header: 'ALK Calls',
            body: 'Received 11 ALK Odactra Calls in 2018' },
          { header: 'NJ License',
            body: 'Has a valid medical license in the state of New Jersey' } ],
       patient_info:
        [ { title: '12 Month Claims Data',
            rows:
             [ { key: 'SCIT Claims 2018', value: '0' },
               { key: 'SLIT Claims Last 12 Months', value: '3' },
               { key: 'Allergy Test Claims 2018', value: '0' },
               { key: 'Other Allergic Rhinitis TRx Claims 2018', value: '227' } ] },
          { title: 'In Promotional Period',
            rows:
             [ { key: 'Savings Card Redemptions (as of 11/4)', value: '5' },
               { key: 'ALK Product Prescriptions (as of 10/25)', value: '3' } ] } ],
       products: [],
       call_log_form_id: 'immutableFormID',
       is_active: true,
       signals: [] },
     { header:
        { createdBy:
           '/usr/local/lib/python3.6/dist-packages/alyvant_sales_rep_app/sales_rep_app_object_manager.py',
          createEpoch: 1574197278,
          objectType: 'Provider',
          refId: 'what is this',
          version: '1',
          uri: 'aly://test' },
       id: '71c6bfca-c80f-48fc-98b4-ddd13fe3fa50',
       enumeration_type: 'NPI-1',
       npi_number: 1912920158,
       taxonomies:
        [ { state: 'NJ',
            code: '207Q00000X',
            primary: 'True',
            license: '25MB07905100',
            desc: 'Family Medicine' } ],
       basic_info:
        { credential: 'D.O.',
          name: 'Unnati Tailor',
          first_name: 'Unnati',
          last_name: 'Tailor',
          gender: 'FEMALE' },
       address:
        [ { recipient: 'Plaza Family Care Chester Office',
            address_1: '245 Main Street',
            address_2: 'Suite 300',
            city: 'Chester',
            state: 'NJ',
            postal_code: '07930',
            google_geocode:
             { geometry:
                { location: { lat: 40.7873747, lng: -74.6903859 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 40.7887236802915, lng: -74.6890369197085 },
                     southwest: { lat: 40.7860257197085, lng: -74.6917348802915 } } },
               place_id: 'ChIJR9ZuD9mbw4kRaglOuvA-_Yw' },
            telephone_number: '908-850-7800',
            times:
             [ { days: [ 1, 5 ], hours: [ { start: '0900', end: '1700' } ] },
               { days: [ 2 ], hours: [ { start: '1100', end: '1930' } ] } ] },
          { address_1: '657 Willow Grove Street',
            address_2: 'Suite 401',
            city: 'Hackettstown',
            state: 'NJ',
            postal_code: '07840',
            google_geocode:
             { geometry:
                { bounds:
                   { northeast: { lat: 40.86275089999999, lng: -74.8142666 },
                     southwest: { lat: 40.8621666, lng: -74.8150253 } },
                  location: { lat: 40.8624739, lng: -74.81461449999999 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 40.8638077302915, lng: -74.8132969697085 },
                     southwest: { lat: 40.8611097697085, lng: -74.81599493029151 } } },
               place_id:
                'EjU0MDEsIDY1NyBXaWxsb3cgR3JvdmUgU3QsIEhhY2tldHRzdG93biwgTkogMDc4NDAsIFVTQSIfGh0KFgoUChIJLa3C2BqDw4kRtNj1x5sgcNISAzQwMQ' },
            telephone_number: '908-850-7800',
            times:
             [ { days: [ 3, 4 ], hours: [ { start: '0900', end: '1600' } ] } ] } ],
       physician_info:
        { education_training:
           [ 'New York Institute Of Technology College Of Osteopathic Medicine, 2003' ],
          hospital_affiliations: [ 'Plaza Family Care, Pc', 'Hackettstown Medical Center' ] },
       relationship: {},
       alyvant_insights:
        [ { header: 'Samples Dropped',
            body: 'HCP did not receive any samples in June 2019' },
          { header: 'Calls Received',
            body: 'HCP received 0 call(s) in June 2019' },
          { header: 'ALK Calls',
            body: 'Received 0 ALK Odactra Calls in 2018' },
          { header: 'More Likely to Treat Symptoms vs. Cause',
            body:
             'Had relatively high alternative TRx Claims to SCIT Claims ratio in 2018' },
          { header: 'NJ License',
            body: 'Has a valid medical license in the state of New Jersey' } ],
       patient_info:
        [ { title: '12 Month Claims Data',
            rows:
             [ { key: 'SCIT Claims 2018', value: '68' },
               { key: 'SLIT Claims Last 12 Months', value: '0' },
               { key: 'Allergy Test Claims 2018', value: '0' },
               { key: 'Other Allergic Rhinitis TRx Claims 2018', value: '83' } ] },
          { title: 'In Promotional Period',
            rows:
             [ { key: 'Savings Card Redemptions (as of 11/4)', value: '0' },
               { key: 'ALK Product Prescriptions (as of 10/25)', value: '0' } ] } ],
       products: [],
       call_log_form_id: 'immutableFormID',
       is_active: true,
       signals: [] },
     { header:
        { createdBy:
           '/usr/local/lib/python3.6/dist-packages/alyvant_sales_rep_app/sales_rep_app_object_manager.py',
          createEpoch: 1574197278,
          objectType: 'Provider',
          refId: 'what is this',
          version: '1',
          uri: 'aly://test' },
       id: '1faf77e3-6436-4077-b23f-4520b58e09f9',
       enumeration_type: 'NPI-1',
       npi_number: 1639272289,
       taxonomies:
        [ { state: 'NJ',
            code: '207YX0905X',
            primary: 'True',
            license: '47806',
            desc: 'Otolaryngology Otolaryngology/Facial Plastic Surgery' },
          { state: 'NY',
            code: '207YX0905X',
            primary: 'False',
            license: '147286',
            desc: 'Otolaryngology Otolaryngology/Facial Plastic Surgery' } ],
       basic_info:
        { credential: 'M.D.',
          name: 'Howard Berg',
          first_name: 'Howard',
          last_name: 'Berg',
          middle_name: 'Martin',
          gender: 'MALE' },
       address:
        [ { address_1: '101 Old Short Hills Road',
            address_2: 'Suite 520',
            city: 'West Orange',
            state: 'NJ',
            postal_code: '07052',
            google_geocode:
             { geometry:
                { bounds:
                   { northeast: { lat: 40.7623488, lng: -74.3019025 },
                     southwest: { lat: 40.7616917, lng: -74.3025311 } },
                  location: { lat: 40.76202019999999, lng: -74.3021962 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 40.7633692302915, lng: -74.3008678197085 },
                     southwest: { lat: 40.7606712697085, lng: -74.3035657802915 } } },
               place_id:
                'Ejc1MjAsIDEwMSBPbGQgU2hvcnQgSGlsbHMgUmQsIFdlc3QgT3JhbmdlLCBOSiAwNzA1MiwgVVNBIh8aHQoWChQKEgndO75E-KvDiRFkV0v-4lOcshIDNTIw' },
            telephone_number: '973-731-5400',
            times:
             [ { days: [ 1 ], hours: [ { start: '1000', end: '1700' } ] },
               { days: [ 2, 3 ], hours: [ { start: '1330', end: '1800' } ] },
               { days: [ 5 ], hours: [ { start: '0900', end: '1630' } ] } ] } ],
       physician_info:
        { education_training: [ 'New York University School Of Medicine, 1980' ],
          hospital_affiliations: [ 'Specialist In Otolaryngology, Llc' ] },
       relationship: {},
       alyvant_insights:
        [ { header: 'Samples Dropped',
            body: 'HCP did not receive any samples in June 2019' },
          { header: 'Calls Received',
            body: 'HCP received 0 call(s) in June 2019' },
          { header: 'ALK Calls',
            body: 'Received 0 ALK Odactra Calls in 2018' },
          { header: 'NJ License',
            body: 'Has a valid medical license in the state of New Jersey' } ],
       patient_info:
        [ { title: '12 Month Claims Data',
            rows:
             [ { key: 'SCIT Claims 2018', value: '990 (projected)' },
               { key: 'SLIT Claims Last 12 Months', value: '0' },
               { key: 'Allergy Test Claims 2018', value: '0' },
               { key: 'Other Allergic Rhinitis TRx Claims 2018', value: '10' } ] },
          { title: 'In Promotional Period',
            rows:
             [ { key: 'Savings Card Redemptions (as of 11/4)', value: '0' },
               { key: 'ALK Product Prescriptions (as of 10/25)', value: '0' } ] } ],
       products: [],
       call_log_form_id: 'immutableFormID',
       is_active: true,
       signals: [] },
     { header:
        { createdBy:
           '/usr/local/lib/python3.6/dist-packages/alyvant_sales_rep_app/sales_rep_app_object_manager.py',
          createEpoch: 1574197278,
          objectType: 'Provider',
          refId: 'what is this',
          version: '1',
          uri: 'aly://test' },
       id: '28302fcf-368e-47a0-9f2a-7d1fc9ee272b',
       enumeration_type: 'NPI-1',
       npi_number: 1588643944,
       taxonomies:
        [ { state: 'NJ',
            code: '207Q00000X',
            primary: 'True',
            license: 'MB07638200',
            desc: 'Family Medicine' } ],
       basic_info:
        { credential: 'D.O.',
          name: 'Shannon Rittberg',
          first_name: 'Shannon',
          last_name: 'Rittberg',
          middle_name: 'B',
          gender: 'FEMALE' },
       address:
        [ { recipient: 'Atlantic Medicine and Wellness',
            address_1: '2399 Route 34',
            address_2: 'Suite A-5',
            city: 'Wall Township',
            state: 'NJ',
            postal_code: '08736',
            google_geocode:
             { geometry:
                { location: { lat: 40.1267383, lng: -74.0838989 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 40.1280872802915, lng: -74.0825499197085 },
                     southwest: { lat: 40.1253893197085, lng: -74.0852478802915 } } },
               place_id: 'ChIJA1YkKfqGwYkRqSbyaLtiyzk' },
            telephone_number: '732-528-5533' } ],
       physician_info:
        { education_training: [ 'Rowan University School Of Osteopathic Medicine, 2002' ],
          hospital_affiliations:
           [ 'Atlantic Medicine And Wellness, Llc',
             'Ocean Medical Center' ] },
       relationship: {},
       alyvant_insights:
        [ { header: 'Samples Dropped',
            body: 'HCP did not receive any samples in June 2019' },
          { header: 'Calls Received',
            body: 'HCP received 2 call(s) in June 2019' },
          { header: 'ALK Calls',
            body: 'Received 0 ALK Odactra Calls in 2018' },
          { header: 'More Likely to Treat Symptoms vs. Cause',
            body:
             'Had relatively high alternative TRx Claims to SCIT Claims ratio in 2018' },
          { header: 'NJ License',
            body: 'Has a valid medical license in the state of New Jersey' } ],
       patient_info:
        [ { title: '12 Month Claims Data',
            rows:
             [ { key: 'SCIT Claims 2018', value: '81' },
               { key: 'SLIT Claims Last 12 Months', value: '0' },
               { key: 'Allergy Test Claims 2018', value: '11' },
               { key: 'Other Allergic Rhinitis TRx Claims 2018', value: '113' } ] },
          { title: 'In Promotional Period',
            rows:
             [ { key: 'Savings Card Redemptions (as of 11/4)', value: '0' },
               { key: 'ALK Product Prescriptions (as of 10/25)', value: '0' } ] } ],
       products: [],
       call_log_form_id: 'immutableFormID',
       is_active: true,
       signals: [] },
     { header:
        { createdBy:
           '/usr/local/lib/python3.6/dist-packages/alyvant_sales_rep_app/sales_rep_app_object_manager.py',
          createEpoch: 1574197278,
          objectType: 'Provider',
          refId: 'what is this',
          version: '1',
          uri: 'aly://test' },
       id: 'f14e939c-9909-45f0-9f61-f41cccb39d57',
       enumeration_type: 'NPI-1',
       npi_number: 1255421673,
       taxonomies:
        [ { state: 'NJ',
            code: '207Y00000X',
            primary: 'True',
            license: '25MA05768900',
            desc: 'Otolaryngology' } ],
       basic_info:
        { credential: 'M.D.',
          name: 'Jay Horowitz',
          first_name: 'Jay',
          last_name: 'Horowitz',
          middle_name: 'B',
          gender: 'MALE' },
       address:
        [ { address_1: '557 Cranbury Rd',
            address_2: 'Ste 3',
            city: 'East Brunswick',
            state: 'NJ',
            postal_code: '08816',
            google_geocode:
             { geometry:
                { bounds:
                   { northeast: { lat: 40.414043, lng: -74.4164257 },
                     southwest: { lat: 40.4132565, lng: -74.4173084 } },
                  location: { lat: 40.4137723, lng: -74.4167465 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 40.41499873029149, lng: -74.4155180697085 },
                     southwest: { lat: 40.41230076970849, lng: -74.4182160302915 } } },
               place_id:
                'EjEzLCA1NTcgQ3JhbmJ1cnkgUmQsIEVhc3QgQnJ1bnN3aWNrLCBOSiAwODgxNiwgVVNBIh0aGwoWChQKEgmHAaMFesXDiRHjLpahV2NSnhIBMw' },
            telephone_number: '732-613-0600',
            times:
             [ { days: [ 1 ], hours: [ { start: '0900', end: '1800' } ] },
               { days: [ 2 ], hours: [ { start: '0930', end: '1930' } ] },
               { days: [ 3, 4 ], hours: [ { start: '0900', end: '1930' } ] },
               { days: [ 5 ], hours: [ { start: '0830', end: '1300' } ] } ] } ],
       physician_info:
        { education_training: [ 'Yale University School Of Medicine, 1987' ],
          hospital_affiliations:
           [ 'Partners In Care, Corp',
             'Saint Peters Healthcare System',
             'Robert Wood Johnson University Hospital',
             'Advanced Otolaryngology Associates, Pa',
             'Robert Wood Johnson University Hospital Comprehensive Sleep Center' ] },
       relationship: {},
       alyvant_insights:
        [ { header: 'Samples Dropped',
            body: 'HCP did not receive any samples in June 2019' },
          { header: 'Calls Received',
            body: 'HCP received 1 call(s) in June 2019' },
          { header: 'ALK Calls',
            body: 'Received 0 ALK Odactra Calls in 2018' },
          { header: 'NJ License',
            body: 'Has a valid medical license in the state of New Jersey' } ],
       patient_info:
        [ { title: '12 Month Claims Data',
            rows:
             [ { key: 'SCIT Claims 2018', value: '990 (projected)' },
               { key: 'SLIT Claims Last 12 Months', value: '0' },
               { key: 'Allergy Test Claims 2018', value: '0' },
               { key: 'Other Allergic Rhinitis TRx Claims 2018', value: '218' } ] },
          { title: 'In Promotional Period',
            rows:
             [ { key: 'Savings Card Redemptions (as of 11/4)', value: '0' },
               { key: 'ALK Product Prescriptions (as of 10/25)', value: '0' } ] } ],
       products: [],
       call_log_form_id: 'immutableFormID',
       is_active: true,
       signals: [] },
     { header:
        { createdBy:
           '/usr/local/lib/python3.6/dist-packages/alyvant_sales_rep_app/sales_rep_app_object_manager.py',
          createEpoch: 1574197278,
          objectType: 'Provider',
          refId: 'what is this',
          version: '1',
          uri: 'aly://test' },
       id: '407a6402-f090-43f5-9b66-9eeff8d54f4b',
       enumeration_type: 'NPI-1',
       npi_number: 1992764906,
       taxonomies:
        [ { state: 'NJ',
            code: '207R00000X',
            primary: 'True',
            license: '25MA07950000',
            desc: 'Internal Medicine' } ],
       basic_info:
        { credential: 'M.d.',
          name: 'Samina Khan',
          first_name: 'Samina',
          last_name: 'Khan',
          gender: 'FEMALE' },
       address:
        [ { address_1: '17 Wanaque Avenue',
            city: 'Pompton Lakes',
            state: 'NJ',
            postal_code: '07442',
            address_2: '',
            google_geocode:
             { geometry:
                { location: { lat: 41.0077698, lng: -74.29460139999999 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 41.00911878029149, lng: -74.29325241970848 },
                     southwest: { lat: 41.0064208197085, lng: -74.29595038029149 } } },
               place_id: 'ChIJlZIkKbocw4kRL7Op7rXb_DU' },
            telephone_number: '973-617-1750',
            times:
             [ { days: [ 1, 5 ], hours: [ { start: '0800', end: '1600' } ] },
               { days: [ 2, 4 ], hours: [ { start: '0800', end: '1800' } ] },
               { days: [ 3 ], hours: [ { start: '0800', end: '1700' } ] } ] } ],
       physician_info:
        { education_training: [ 'Rawalpindi Medical College, 1988' ],
          hospital_affiliations:
           [ 'Kahn, Samina K, Office',
             'Empire Medical Associates, Pc',
             'Saint Barnabas Medical Center',
             'Saint Michaels Medical Center',
             'Newark Beth Israel Medical Center' ] },
       relationship: {},
       alyvant_insights:
        [ { header: 'Samples Dropped',
            body: 'HCP did not receive any samples in June 2019' },
          { header: 'Calls Received',
            body: 'HCP received 0 call(s) in June 2019' },
          { header: 'ALK Calls',
            body: 'Received 0 ALK Odactra Calls in 2018' },
          { header: 'More Likely to Treat Symptoms vs. Cause',
            body:
             'Had relatively high alternative TRx Claims to SCIT Claims ratio in 2018' },
          { header: 'NJ License',
            body: 'Has a valid medical license in the state of New Jersey' } ],
       patient_info:
        [ { title: '12 Month Claims Data',
            rows:
             [ { key: 'SCIT Claims 2018', value: '53' },
               { key: 'SLIT Claims Last 12 Months', value: '0' },
               { key: 'Allergy Test Claims 2018', value: '3' },
               { key: 'Other Allergic Rhinitis TRx Claims 2018', value: '177' } ] },
          { title: 'In Promotional Period',
            rows:
             [ { key: 'Savings Card Redemptions (as of 11/4)', value: '0' },
               { key: 'ALK Product Prescriptions (as of 10/25)', value: '0' } ] } ],
       products: [],
       call_log_form_id: 'immutableFormID',
       is_active: true,
       signals: [] },
     { header:
        { createdBy:
           '/usr/local/lib/python3.6/dist-packages/alyvant_sales_rep_app/sales_rep_app_object_manager.py',
          createEpoch: 1574197278,
          objectType: 'Provider',
          refId: 'what is this',
          version: '1',
          uri: 'aly://test' },
       id: '72aba29a-a91f-4cae-a462-8a4202bdfd86',
       enumeration_type: 'NPI-1',
       npi_number: 1598769259,
       taxonomies:
        [ { state: 'NJ',
            code: '207Y00000X',
            primary: 'True',
            license: 'MA72979',
            desc: 'Otolaryngology' } ],
       basic_info:
        { credential: 'M.D.',
          name: 'Sean Houston',
          first_name: 'Sean',
          last_name: 'Houston',
          middle_name: 'D.',
          gender: 'MALE' },
       address:
        [ { recipient: 'Coastal Ear Nose & Throat Neptune',
            address_1: '3700 Route 33',
            address_2: 'Suite 101',
            city: 'Neptune',
            state: 'NJ',
            postal_code: '07753',
            google_geocode:
             { geometry:
                { location: { lat: 40.2102335, lng: -74.0919238 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 40.2115824802915, lng: -74.0905748197085 },
                     southwest: { lat: 40.2088845197085, lng: -74.0932727802915 } } },
               place_id: 'ChIJkZWvXR8owokR77kLJ7K7_YE' },
            telephone_number: '732-280-7855',
            times:
             [ { days: [ 1, 4 ], hours: [ { start: '0800', end: '1900' } ] },
               { days: [ 2, 3, 5 ], hours: [ { start: '0800', end: '1700' } ] } ] } ],
       physician_info:
        { education_training: [ 'Georgetown University School Of Medicine, 1992' ],
          hospital_affiliations:
           [ 'Coastal Surgery Center',
             'K Hovnanian Childrens Hospital At Jersey Shore University Medical Center',
             'Coastal Ear, Nose, And Throat',
             'Jersey Shore University Medical Center' ] },
       relationship: {},
       alyvant_insights:
        [ { header: 'Deprioritized Physician ',
            body:
             'Physician deprioritized because of locations or lack of access' },
          { header: 'Samples Dropped',
            body: 'HCP did not receive any samples in June 2019' },
          { header: 'Calls Received',
            body: 'HCP received 0 call(s) in June 2019' },
          { header: 'ALK Calls',
            body: 'Received 0 ALK Odactra Calls in 2018' },
          { header: 'NJ License',
            body: 'Has a valid medical license in the state of New Jersey' } ],
       patient_info:
        [ { title: '12 Month Claims Data',
            rows:
             [ { key: 'SCIT Claims 2018', value: '451' },
               { key: 'SLIT Claims Last 12 Months', value: '0' },
               { key: 'Allergy Test Claims 2018', value: '47' },
               { key: 'Other Allergic Rhinitis TRx Claims 2018', value: '314' } ] },
          { title: 'In Promotional Period',
            rows:
             [ { key: 'Savings Card Redemptions (as of 11/4)', value: '0' },
               { key: 'ALK Product Prescriptions (as of 10/25)', value: '0' } ] } ],
       products: [],
       call_log_form_id: 'immutableFormID',
       is_active: true,
       signals: [] },
     { header:
        { createdBy:
           '/usr/local/lib/python3.6/dist-packages/alyvant_sales_rep_app/sales_rep_app_object_manager.py',
          createEpoch: 1574197279,
          objectType: 'Provider',
          refId: 'what is this',
          version: '1',
          uri: 'aly://test' },
       id: '3be9db40-f1a5-4968-aa5a-c63eb5fb0196',
       enumeration_type: 'NPI-1',
       npi_number: 1871658476,
       taxonomies:
        [ { state: 'NJ',
            code: '207KA0200X',
            primary: 'True',
            license: '25MA05938300',
            desc: 'Allergy & Immunology Allergy' } ],
       basic_info:
        { credential: 'M.D.',
          name: 'Howard Druce',
          first_name: 'Howard',
          last_name: 'Druce',
          middle_name: 'Martin',
          gender: 'MALE' },
       address:
        [ { address_1: '242 E. Main Street',
            city: 'Somerville',
            state: 'NJ',
            postal_code: '08876',
            address_2: '',
            google_geocode:
             { geometry:
                { bounds:
                   { northeast: { lat: 40.5657772, lng: -74.6016994 },
                     southwest: { lat: 40.5655098, lng: -74.6018532 } },
                  location: { lat: 40.5656488, lng: -74.60175679999999 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 40.5669924802915, lng: -74.6004273197085 },
                     southwest: { lat: 40.5642945197085, lng: -74.60312528029151 } } },
               place_id: 'ChIJDU7VHFOVw4kRlF49ei94e6g' },
            telephone_number: '908-704-9696',
            times:
             [ { days: [ 1, 2, 4 ], hours: [ { start: '0900', end: '1700' } ] } ] } ],
       physician_info:
        { education_training: [ 'Middlesex Hospital Medical School, 1977' ],
          hospital_affiliations:
           [ 'Ear, Nose And Throat Care, Pc',
             'Robert Wood Johnson University Hospital Somerset' ] },
       relationship: {},
       alyvant_insights:
        [ { header: 'Calls Received',
            body: 'HCP received 3 call(s) in June 2019' },
          { header: 'ALK Calls',
            body: 'Received 10 ALK Odactra Calls in 2018' },
          { header: 'More Likely to Perform Test',
            body:
             'Had a relatively low SCIT to allergy test claims ratio in 2018' },
          { header: 'More Likely to Treat Symptoms vs. Cause',
            body:
             'Had relatively high alternative TRx Claims to SCIT Claims ratio in 2018' },
          { header: 'NJ License',
            body: 'Has a valid medical license in the state of New Jersey' } ],
       patient_info:
        [ { title: '12 Month Claims Data',
            rows:
             [ { key: 'SCIT Claims 2018', value: '1' },
               { key: 'SLIT Claims Last 12 Months', value: '8' },
               { key: 'Allergy Test Claims 2018', value: '28' },
               { key: 'Other Allergic Rhinitis TRx Claims 2018', value: '131' } ] },
          { title: 'In Promotional Period',
            rows:
             [ { key: 'Savings Card Redemptions (as of 11/4)', value: '4' },
               { key: 'ALK Product Prescriptions (as of 10/25)', value: '6' } ] } ],
       products: [],
       call_log_form_id: 'immutableFormID',
       is_active: true,
       signals: [] },
     { header:
        { createdBy:
           '/usr/local/lib/python3.6/dist-packages/alyvant_sales_rep_app/sales_rep_app_object_manager.py',
          createEpoch: 1574197279,
          objectType: 'Provider',
          refId: 'what is this',
          version: '1',
          uri: 'aly://test' },
       id: 'da37cdcf-ccfe-46d8-99a9-65b8e1b59303',
       enumeration_type: 'NPI-1',
       npi_number: 1558519918,
       taxonomies:
        [ { state: 'NJ',
            code: '207Y00000X',
            primary: 'True',
            license: '25MA09051100',
            desc: 'Otolaryngology' },
          { state: 'NY',
            code: '207Y00000X',
            primary: 'False',
            license: 'FG2657003',
            desc: 'Otolaryngology' } ],
       basic_info:
        { credential: 'M.D.',
          name: 'Lowell Gurey',
          first_name: 'Lowell',
          last_name: 'Gurey',
          middle_name: 'Evan',
          gender: 'MALE' },
       address:
        [ { recipient: 'Berkeley Heights Campus/Lawrence Pavillion',
            address_2: '2nd Floor',
            address_1: '1 Diamond Hill Road',
            city: 'Berkeley Heights',
            state: 'NJ',
            postal_code: '07922',
            google_geocode:
             { geometry:
                { location: { lat: 40.6780337, lng: -74.4121498 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 40.6793826802915, lng: -74.41080081970848 },
                     southwest: { lat: 40.6766847197085, lng: -74.4134987802915 } } },
               place_id: 'ChIJ16ABI6K6w4kRDsgeFEiWNso' },
            telephone_number: '908-277-8681',
            times:
             [ { days: [ 1, 2, 3, 4, 5 ],
                 hours: [ { start: '0800', end: '1700' } ] } ] },
          { recipient: 'Florham Park Campus',
            address_1: '140 Park Avenue',
            city: 'Florham Park',
            state: 'NJ',
            postal_code: '07932',
            address_2: '',
            google_geocode:
             { geometry:
                { bounds:
                   { northeast: { lat: 40.7814482, lng: -74.4266818 },
                     southwest: { lat: 40.78101940000001, lng: -74.427525 } },
                  location: { lat: 40.7811751, lng: -74.42718980000001 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 40.78258278029151, lng: -74.4257544197085 },
                     southwest: { lat: 40.77988481970851, lng: -74.4284523802915 } } },
               place_id: 'ChIJcxJ2Ewumw4kRrs8l6oYTvJ0' },
            telephone_number: '973-404-9970',
            times:
             [ { days: [ 1, 2, 3, 4, 5 ],
                 hours: [ { start: '0800', end: '1700' } ] } ] } ],
       physician_info:
        { education_training: [ 'Rutgers New Jersey Medical School, 2006' ],
          hospital_affiliations: [ 'Summit Medical Group Berkeley Heights Campus' ] },
       relationship: {},
       alyvant_insights:
        [ { header: 'Deprioritized Physician ',
            body:
             'Physician deprioritized because of locations or lack of access' },
          { header: 'Samples Dropped',
            body: 'HCP did not receive any samples in June 2019' },
          { header: 'Calls Received',
            body: 'HCP received 0 call(s) in June 2019' },
          { header: 'ALK Calls',
            body: 'Received 0 ALK Odactra Calls in 2018' },
          { header: 'NJ License',
            body: 'Has a valid medical license in the state of New Jersey' } ],
       patient_info:
        [ { title: '12 Month Claims Data',
            rows:
             [ { key: 'SCIT Claims 2018', value: '990 (projected)' },
               { key: 'SLIT Claims Last 12 Months', value: '0' },
               { key: 'Allergy Test Claims 2018', value: '0' },
               { key: 'Other Allergic Rhinitis TRx Claims 2018', value: '17' } ] },
          { title: 'In Promotional Period',
            rows:
             [ { key: 'Savings Card Redemptions (as of 11/4)', value: '0' },
               { key: 'ALK Product Prescriptions (as of 10/25)', value: '0' } ] } ],
       products: [],
       call_log_form_id: 'immutableFormID',
       is_active: true,
       signals: [] },
     { header:
        { createdBy:
           '/usr/local/lib/python3.6/dist-packages/alyvant_sales_rep_app/sales_rep_app_object_manager.py',
          createEpoch: 1574197279,
          objectType: 'Provider',
          refId: 'what is this',
          version: '1',
          uri: 'aly://test' },
       id: '61741806-6f38-40df-a6aa-35eef8ba984e',
       enumeration_type: 'NPI-1',
       npi_number: 1851342703,
       taxonomies:
        [ { state: 'NY',
            code: '207R00000X',
            primary: 'True',
            license: '002214',
            desc: 'Internal Medicine' } ],
       basic_info:
        { credential: 'M.D.',
          name: 'Carlos Tejeda',
          first_name: 'Carlos',
          last_name: 'Tejeda',
          middle_name: 'Alberto',
          gender: 'MALE' },
       address:
        [ { address_1: '916 Main Avenue',
            address_2: 'Suite 1-A',
            city: 'Passaic',
            state: 'NJ',
            postal_code: '07055',
            google_geocode:
             { geometry:
                { bounds:
                   { northeast: { lat: 40.868854, lng: -74.13290930000001 },
                     southwest: { lat: 40.8685867, lng: -74.1332396 } },
                  location: { lat: 40.8686728, lng: -74.1331257 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 40.87006933029149, lng: -74.1317254697085 },
                     southwest: { lat: 40.8673713697085, lng: -74.1344234302915 } } },
               place_id:
                'Ei9TdWl0ZSAxLUEsIDkxNiBNYWluIEF2ZSwgUGFzc2FpYywgTkogMDcwNTUsIFVTQSIlGiMKFgoUChIJ2YYkH8_-wokRXcyd1lE0qKASCVN1aXRlIDEtQQ' },
            telephone_number: '973-773-0334',
            times:
             [ { days: [ 1, 2 ], hours: [ { start: '0830', end: '1730' } ] },
               { days: [ 3, 5 ], hours: [ { start: '0830', end: '1530' } ] },
               { days: [ 4 ], hours: [ { start: '0830', end: '1700' } ] } ] } ],
       physician_info:
        { education_training:
           [ 'Universidad Autonoma De Santo Domingo Facultad De Ciencias De La Salud, 2000' ],
          hospital_affiliations:
           [ 'Saint Marys Hospital',
             'Center For Adult Medicine And Preventive Care' ] },
       relationship: {},
       alyvant_insights:
        [ { header: 'Calls Received',
            body: 'HCP received 2 call(s) in June 2019' },
          { header: 'ALK Calls',
            body: 'Received 0 ALK Odactra Calls in 2018' },
          { header: 'NJ License',
            body: 'Has a valid medical license in the state of New Jersey' } ],
       patient_info:
        [ { title: '12 Month Claims Data',
            rows:
             [ { key: 'SCIT Claims 2018', value: 'Restricted' },
               { key: 'SLIT Claims Last 12 Months', value: 'Restricted' },
               { key: 'Allergy Test Claims 2018', value: 'Restricted' },
               { key: 'Other Allergic Rhinitis TRx Claims 2018',
                 value: 'Restricted' } ] },
          { title: 'In Promotional Period',
            rows:
             [ { key: 'Savings Card Redemptions (as of 11/4)',
                 value: 'Restricted' },
               { key: 'ALK Product Prescriptions (as of 10/25)',
                 value: 'Restricted' } ] } ],
       products: [],
       call_log_form_id: 'immutableFormID',
       is_active: true,
       signals: [] },
     { header:
        { createdBy:
           '/usr/local/lib/python3.6/dist-packages/alyvant_sales_rep_app/sales_rep_app_object_manager.py',
          createEpoch: 1574197279,
          objectType: 'Provider',
          refId: 'what is this',
          version: '1',
          uri: 'aly://test' },
       id: '913c486e-57e9-43ac-9602-7f9d5df47e2f',
       enumeration_type: 'NPI-1',
       npi_number: 1952665200,
       taxonomies:
        [ { state: 'NJ',
            code: '207Q00000X',
            primary: 'True',
            license: '25MA09637100',
            desc: 'Family Medicine' } ],
       basic_info:
        { credential: 'M.D',
          name: 'Anna Pudinak',
          first_name: 'Anna',
          last_name: 'Pudinak',
          gender: 'FEMALE' },
       address:
        [ { address_1: '1135 Clifton Avenue',
            address_2: 'Suite 203',
            city: 'Clifton',
            state: 'NJ',
            postal_code: '07013',
            google_geocode:
             { geometry:
                { bounds:
                   { northeast: { lat: 40.85984790000001, lng: -74.1667847 },
                     southwest: { lat: 40.8594345, lng: -74.167351 } },
                  location: { lat: 40.8596437, lng: -74.16707140000001 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 40.8609901802915, lng: -74.1657188697085 },
                     southwest: { lat: 40.8582922197085, lng: -74.1684168302915 } } },
               place_id:
                'Ei0yMDMsIDExMzUgQ2xpZnRvbiBBdmUsIENsaWZ0b24sIE5KIDA3MDEzLCBVU0EiHxodChYKFAoSCUOWfdsB_8KJEX76Q9LmSz53EgMyMDM' },
            telephone_number: '862-414-3335',
            times:
             [ { days: [ 1, 2, 3, 5 ],
                 hours: [ { start: '0900', end: '1700' } ] },
               { days: [ 4 ], hours: [ { start: '1100', end: '1900' } ] } ] } ],
       physician_info:
        { education_training:
           [ 'Krasnoyarsk State Medical Univ Named After Professor Vf Voino-Yasenetsky, 1995' ],
          hospital_affiliations: [ 'Null' ] },
       relationship: {},
       alyvant_insights:
        [ { header: 'Savings Card Activity',
            body: 'Doctor\'s patient has used a savings card in 2019' },
          { header: 'Samples Dropped',
            body: 'HCP did not receive any samples in June 2019' },
          { header: 'Calls Received',
            body: 'HCP received 4 call(s) in June 2019' },
          { header: 'ALK Calls',
            body: 'Received 0 ALK Odactra Calls in 2018' },
          { header: 'NJ License',
            body: 'Has a valid medical license in the state of New Jersey' } ],
       patient_info:
        [ { title: '12 Month Claims Data',
            rows:
             [ { key: 'SCIT Claims 2018', value: '97' },
               { key: 'SLIT Claims Last 12 Months', value: '21' },
               { key: 'Allergy Test Claims 2018', value: '17' },
               { key: 'Other Allergic Rhinitis TRx Claims 2018', value: '20' } ] },
          { title: 'In Promotional Period',
            rows:
             [ { key: 'Savings Card Redemptions (as of 11/4)', value: '23' },
               { key: 'ALK Product Prescriptions (as of 10/25)', value: '21' } ] } ],
       products: [],
       call_log_form_id: 'immutableFormID',
       is_active: true,
       signals: [] },
     { header:
        { createdBy:
           '/usr/local/lib/python3.6/dist-packages/alyvant_sales_rep_app/sales_rep_app_object_manager.py',
          createEpoch: 1574197279,
          objectType: 'Provider',
          refId: 'what is this',
          version: '1',
          uri: 'aly://test' },
       id: '0c6f4aa4-700b-403b-af0f-f9305db69e55',
       enumeration_type: 'NPI-1',
       npi_number: 1447365747,
       taxonomies:
        [ { state: 'NJ',
            code: '174400000X',
            primary: 'True',
            license: '25MA07280500',
            desc: 'Specialist' } ],
       basic_info:
        { credential: 'M.D., F.A.C.S.',
          name: 'Stephen Kupferberg',
          first_name: 'Stephen',
          last_name: 'Kupferberg',
          middle_name: 'B',
          gender: 'MALE' },
       address:
        [ { address_1: '54 Bey Lea Rd.',
            address_2: 'Suite 3',
            city: 'Toms River',
            state: 'NJ',
            postal_code: '08753',
            google_geocode:
             { geometry:
                { bounds:
                   { northeast: { lat: 39.9885423, lng: -74.2007513 },
                     southwest: { lat: 39.9882588, lng: -74.20108239999999 } },
                  location: { lat: 39.988412, lng: -74.2009193 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 39.9897495302915, lng: -74.19956786970847 },
                     southwest: { lat: 39.9870515697085, lng: -74.20226583029148 } } },
               place_id:
                'EiszLCA1NCBCZXkgTGVhIFJkLCBUb21zIFJpdmVyLCBOSiAwODc1MywgVVNBIh0aGwoWChQKEgm514TcnZ3BiRHaR9geZX68DRIBMw' },
            telephone_number: '732-281-0100',
            times:
             [ { days: [ 1, 2, 3, 4, 5 ],
                 hours: [ { start: '0900', end: '1700' } ] } ] } ],
       physician_info:
        { education_training:
           [ 'Sidney Kimmel Medical College At Thomas Jefferson University, 1992' ],
          hospital_affiliations:
           [ 'Bey Lea Ambulatory Surgery Center',
             'Community Medical Center',
             'Ocean Otolaryngology Associates, Pa' ] },
       relationship: {},
       alyvant_insights:
        [ { header: 'Samples Dropped',
            body: 'HCP did not receive any samples in June 2019' },
          { header: 'Calls Received',
            body: 'HCP received 2 call(s) in June 2019' },
          { header: 'ALK Calls',
            body: 'Received 0 ALK Odactra Calls in 2018' },
          { header: 'NJ License',
            body: 'Has a valid medical license in the state of New Jersey' } ],
       patient_info:
        [ { title: '12 Month Claims Data',
            rows:
             [ { key: 'SCIT Claims 2018', value: '1720 (projected)' },
               { key: 'SLIT Claims Last 12 Months', value: '0' },
               { key: 'Allergy Test Claims 2018', value: '0' },
               { key: 'Other Allergic Rhinitis TRx Claims 2018', value: '3' } ] },
          { title: 'In Promotional Period',
            rows:
             [ { key: 'Savings Card Redemptions (as of 11/4)', value: '0' },
               { key: 'ALK Product Prescriptions (as of 10/25)', value: '0' } ] } ],
       products: [],
       call_log_form_id: 'immutableFormID',
       is_active: true,
       signals: [] },
     { header:
        { createdBy:
           '/usr/local/lib/python3.6/dist-packages/alyvant_sales_rep_app/sales_rep_app_object_manager.py',
          createEpoch: 1574197279,
          objectType: 'Provider',
          refId: 'what is this',
          version: '1',
          uri: 'aly://test' },
       id: '5f0e10ea-2de1-4e67-b7ad-4db36e2a7781',
       enumeration_type: 'NPI-1',
       npi_number: 1699933044,
       taxonomies:
        [ { state: 'NJ',
            code: '207Y00000X',
            primary: 'True',
            license: '25MA09512900',
            desc: 'Otolaryngology' } ],
       basic_info:
        { credential: 'M.D.',
          name: 'Giant Lin',
          first_name: 'Giant',
          last_name: 'Lin',
          middle_name: 'Chu',
          gender: 'MALE' },
       address:
        [ { recipient: 'ENT and Allergy Summit Medical Group',
            address_1: '140 Park Avenue',
            city: 'Florham Park',
            state: 'NJ',
            postal_code: '07932',
            address_2: '',
            google_geocode:
             { geometry:
                { location: { lat: 40.7805988, lng: -74.42683459999999 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 40.7819477802915, lng: -74.42548561970848 },
                     southwest: { lat: 40.7792498197085, lng: -74.42818358029149 } } },
               place_id: 'ChIJTUm0EQumw4kR8a3oECmE6Ag' },
            telephone_number: '973-404-9970',
            times:
             [ { days: [ 1, 2, 3, 4, 5 ],
                 hours: [ { start: '0830', end: '1700' } ] } ] } ],
       physician_info:
        { education_training: [ 'University Of Michigan Medical School, 2008' ],
          hospital_affiliations: [ 'Summit Medical Group' ] },
       relationship: {},
       alyvant_insights:
        [ { header: 'Deprioritized Physician ',
            body:
             'Physician deprioritized because of locations or lack of access' },
          { header: 'Samples Dropped',
            body: 'HCP did not receive any samples in June 2019' },
          { header: 'Calls Received',
            body: 'HCP received 0 call(s) in June 2019' },
          { header: 'ALK Calls',
            body: 'Received 0 ALK Odactra Calls in 2018' },
          { header: 'NJ License',
            body: 'Has a valid medical license in the state of New Jersey' } ],
       patient_info:
        [ { title: '12 Month Claims Data',
            rows:
             [ { key: 'SCIT Claims 2018', value: '1720 (projected)' },
               { key: 'SLIT Claims Last 12 Months', value: '0' },
               { key: 'Allergy Test Claims 2018', value: '0' },
               { key: 'Other Allergic Rhinitis TRx Claims 2018', value: '13' } ] },
          { title: 'In Promotional Period',
            rows:
             [ { key: 'Savings Card Redemptions (as of 11/4)', value: '0' },
               { key: 'ALK Product Prescriptions (as of 10/25)', value: '0' } ] } ],
       products: [],
       call_log_form_id: 'immutableFormID',
       is_active: true,
       signals: [] },
     { header:
        { createdBy:
           '/usr/local/lib/python3.6/dist-packages/alyvant_sales_rep_app/sales_rep_app_object_manager.py',
          createEpoch: 1574197280,
          objectType: 'Provider',
          refId: 'what is this',
          version: '1',
          uri: 'aly://test' },
       id: '44c86c77-75a9-4221-b48c-b6bcf79a088e',
       enumeration_type: 'NPI-1',
       npi_number: 1902912249,
       taxonomies:
        [ { state: 'NJ',
            code: '207K00000X',
            primary: 'True',
            license: 'MA58216',
            desc: 'Allergy & Immunology' },
          { state: 'NJ',
            code: '207K00000X',
            primary: 'False',
            license: 'MA05821600',
            desc: 'Allergy & Immunology' },
          { state: 'NJ',
            code: '207KA0200X',
            primary: 'False',
            license: 'MA58216',
            desc: 'Allergy & Immunology Allergy' } ],
       basic_info:
        { credential: 'M.D.',
          name: 'Hyok Lee',
          first_name: 'Hyok',
          last_name: 'Lee',
          middle_name: 'Y',
          gender: 'MALE' },
       address:
        [ { address_1: '173 Essex Avenue',
            address_2: 'Suite 101',
            city: 'Metuchen',
            state: 'NJ',
            postal_code: '08840',
            google_geocode:
             { geometry:
                { bounds:
                   { northeast: { lat: 40.5366599, lng: -74.3715196 },
                     southwest: { lat: 40.536236, lng: -74.3718006 } },
                  location: { lat: 40.536421, lng: -74.37162239999999 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 40.5377969302915, lng: -74.37031111970849 },
                     southwest: { lat: 40.5350989697085, lng: -74.37300908029151 } } },
               place_id:
                'EisxMDEsIDE3MyBFc3NleCBBdmUsIE1ldHVjaGVuLCBOSiAwODg0MCwgVVNBIh8aHQoWChQKEgmzSsHt2bfDiRFaY0Gy573kRRIDMTAx' },
            telephone_number: '732-549-7007',
            times:
             [ { days: [ 1 ], hours: [ { start: '0830', end: '1200' } ] },
               { days: [ 4 ], hours: [ { start: '1400', end: '2000' } ] } ] } ],
       physician_info:
        { education_training: [ 'Seoul National University College Of Medicine, 1979' ],
          hospital_affiliations:
           [ 'Albert Einstein Healthcare Network',
             'Hackensack Meridian Health Jfk Medical Center',
             'Lee Medical Associates' ] },
       relationship: {},
       alyvant_insights:
        [ { header: 'Samples Dropped',
            body: 'HCP did not receive any samples in June 2019' },
          { header: 'Calls Received',
            body: 'HCP received 1 call(s) in June 2019' },
          { header: 'ALK Calls',
            body: 'Received 4 ALK Odactra Calls in 2018' },
          { header: 'Highly Active HCP',
            body: 'Top 25% in both SCIT and allergy test claims in 2018' },
          { header: 'NJ License',
            body: 'Has a valid medical license in the state of New Jersey' } ],
       patient_info:
        [ { title: '12 Month Claims Data',
            rows:
             [ { key: 'SCIT Claims 2018', value: '1404' },
               { key: 'SLIT Claims Last 12 Months', value: '0' },
               { key: 'Allergy Test Claims 2018', value: '94' },
               { key: 'Other Allergic Rhinitis TRx Claims 2018', value: '71' } ] },
          { title: 'In Promotional Period',
            rows:
             [ { key: 'Savings Card Redemptions (as of 11/4)', value: '0' },
               { key: 'ALK Product Prescriptions (as of 10/25)', value: '0' } ] } ],
       products: [],
       call_log_form_id: 'immutableFormID',
       is_active: true,
       signals: [] },
     { header:
        { createdBy:
           '/usr/local/lib/python3.6/dist-packages/alyvant_sales_rep_app/sales_rep_app_object_manager.py',
          createEpoch: 1574197280,
          objectType: 'Provider',
          refId: 'what is this',
          version: '1',
          uri: 'aly://test' },
       id: 'b609a359-3f0e-4792-a68c-f05e37cfc6a6',
       enumeration_type: 'NPI-1',
       npi_number: 1831293174,
       taxonomies:
        [ { state: 'NJ',
            code: '207RI0200X',
            primary: 'True',
            license: 'MA58129',
            desc: 'Internal Medicine Infectious Disease' },
          { state: 'NJ',
            code: '207R00000X',
            primary: 'False',
            license: 'MA58129',
            desc: 'Internal Medicine' } ],
       basic_info:
        { credential: 'M.D.',
          name: 'Nader Moaven',
          first_name: 'Nader',
          last_name: 'Moaven',
          gender: 'MALE' },
       address:
        [ { address_1: '264 Boyden Ave',
            city: 'Maplewood',
            state: 'NJ',
            postal_code: '07040',
            address_2: '',
            google_geocode:
             { geometry:
                { bounds:
                   { northeast: { lat: 40.722358, lng: -74.2543463 },
                     southwest: { lat: 40.7221192, lng: -74.2546751 } },
                  location: { lat: 40.7222488, lng: -74.2544989 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 40.72358758029151, lng: -74.25316171970849 },
                     southwest: { lat: 40.72088961970851, lng: -74.2558596802915 } } },
               place_id: 'ChIJQ_3Kwvqsw4kRHPawSHCD4YI' },
            telephone_number: '973-761-5200',
            times:
             [ { days: [ 1 ], hours: [ { start: '1200', end: '1800' } ] },
               { days: [ 4 ], hours: [ { start: '1200', end: '1700' } ] } ] },
          { address_1: '5 Franklin Avenue',
            address_2: 'Suite 302',
            city: 'Belleville',
            state: 'NJ',
            postal_code: '07109',
            google_geocode:
             { geometry:
                { bounds:
                   { northeast: { lat: 40.786794, lng: -74.1754192 },
                     southwest: { lat: 40.786415, lng: -74.1758637 } },
                  location: { lat: 40.7866294, lng: -74.1756028 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 40.7879534802915, lng: -74.17429246970849 },
                     southwest: { lat: 40.78525551970851, lng: -74.1769904302915 } } },
               place_id:
                'Ei4zMDIsIDUgRnJhbmtsaW4gQXZlLCBCZWxsZXZpbGxlLCBOSiAwNzEwOSwgVVNBIh8aHQoWChQKEgnXWRZGAVXCiRECGiZ3gwkBfBIDMzAy' },
            telephone_number: '973-759-1221',
            times:
             [ { days: [ 2 ], hours: [ { start: '1300', end: '1800' } ] },
               { days: [ 5 ], hours: [ { start: '1200', end: '1445' } ] } ] } ],
       physician_info:
        { education_training: [ 'St George\'\'S University School Of Medicine, 1989' ],
          hospital_affiliations:
           [ 'Empire Medical Associates, Pc',
             'Clara Maass Medical Center',
             'Saint Barnabas Medical Center',
             'Saint Michaels Medical Center',
             'Clara Maass Medical Center Transitional Care Unit' ] },
       relationship: {},
       alyvant_insights:
        [ { header: 'Samples Dropped',
            body: 'HCP did not receive any samples in June 2019' },
          { header: 'Calls Received',
            body: 'HCP received 2 call(s) in June 2019' },
          { header: 'ALK Calls',
            body: 'Received 0 ALK Odactra Calls in 2018' },
          { header: 'More Likely to Treat Symptoms vs. Cause',
            body:
             'Had relatively high alternative TRx Claims to SCIT Claims ratio in 2018' },
          { header: 'NJ License',
            body: 'Has a valid medical license in the state of New Jersey' } ],
       patient_info:
        [ { title: '12 Month Claims Data',
            rows:
             [ { key: 'SCIT Claims 2018', value: '120' },
               { key: 'SLIT Claims Last 12 Months', value: '0' },
               { key: 'Allergy Test Claims 2018', value: '21' },
               { key: 'Other Allergic Rhinitis TRx Claims 2018', value: '368' } ] },
          { title: 'In Promotional Period',
            rows:
             [ { key: 'Savings Card Redemptions (as of 11/4)', value: '0' },
               { key: 'ALK Product Prescriptions (as of 10/25)', value: '0' } ] } ],
       products: [],
       call_log_form_id: 'immutableFormID',
       is_active: true,
       signals: [] },
     { header:
        { createdBy:
           '/usr/local/lib/python3.6/dist-packages/alyvant_sales_rep_app/sales_rep_app_object_manager.py',
          createEpoch: 1574197280,
          objectType: 'Provider',
          refId: 'what is this',
          version: '1',
          uri: 'aly://test' },
       id: '1a38709c-9326-47b1-ae28-a83705836c1a',
       enumeration_type: 'NPI-1',
       npi_number: 1285662072,
       taxonomies:
        [ { state: 'NJ',
            code: '207Y00000X',
            primary: 'True',
            license: '25MA05327100',
            desc: 'Otolaryngology' } ],
       basic_info:
        { credential: 'M.D.',
          name: 'Stanley Sheft',
          first_name: 'Stanley',
          last_name: 'Sheft',
          middle_name: 'A',
          gender: 'MALE' },
       address:
        [ { address_1: '6 Sand Hill Road',
            address_2: 'Suite 302',
            city: 'Flemington',
            state: 'NJ',
            postal_code: '08822',
            google_geocode:
             { geometry:
                { location: { lat: 40.5372518, lng: -74.8596404 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 40.5386007802915, lng: -74.8582914197085 },
                     southwest: { lat: 40.5359028197085, lng: -74.86098938029151 } } },
               place_id: 'ChIJu7m2He3zw4kRfbULXuo0i5c' },
            telephone_number: '908-788-9131',
            times:
             [ { days: [ 1, 2, 4, 5 ],
                 hours: [ { start: '0800', end: '1700' } ] },
               { days: [ 3 ], hours: [ { start: '0800', end: '1900' } ] } ] } ],
       physician_info:
        { education_training: [ 'Rutgers Robert Wood Johnson Medical School, 1984' ],
          hospital_affiliations:
           [ 'Hunterdon Otolaryngology Associates, Pa',
             'Hunterdon Center For Surgery',
             'Hunterdon Healthcare' ] },
       relationship: {},
       alyvant_insights:
        [ { header: 'Samples Dropped',
            body: 'HCP did not receive any samples in June 2019' },
          { header: 'Calls Received',
            body: 'HCP received 1 call(s) in June 2019' },
          { header: 'ALK Calls',
            body: 'Received 3 ALK Odactra Calls in 2018' },
          { header: 'NJ License',
            body: 'Has a valid medical license in the state of New Jersey' } ],
       patient_info:
        [ { title: '12 Month Claims Data',
            rows:
             [ { key: 'SCIT Claims 2018', value: 'Restricted' },
               { key: 'SLIT Claims Last 12 Months', value: 'Restricted' },
               { key: 'Allergy Test Claims 2018', value: 'Restricted' },
               { key: 'Other Allergic Rhinitis TRx Claims 2018',
                 value: 'Restricted' } ] },
          { title: 'In Promotional Period',
            rows:
             [ { key: 'Savings Card Redemptions (as of 11/4)',
                 value: 'Restricted' },
               { key: 'ALK Product Prescriptions (as of 10/25)',
                 value: 'Restricted' } ] } ],
       products: [],
       call_log_form_id: 'immutableFormID',
       is_active: true,
       signals: [] },
     { header:
        { createdBy:
           '/usr/local/lib/python3.6/dist-packages/alyvant_sales_rep_app/sales_rep_app_object_manager.py',
          createEpoch: 1574197280,
          objectType: 'Provider',
          refId: 'what is this',
          version: '1',
          uri: 'aly://test' },
       id: '979140cf-064c-442a-98bd-f4da81d4645d',
       enumeration_type: 'NPI-1',
       npi_number: 1861439481,
       taxonomies:
        [ { state: 'NJ',
            code: '207YX0007X',
            primary: 'True',
            license: '25MB05069700',
            desc: 'Otolaryngology Plastic Surgery within the Head & Neck' },
          { state: 'NJ',
            code: '207Y00000X',
            primary: 'False',
            license: '25MB05069700',
            desc: 'Otolaryngology' },
          { state: 'NJ',
            code: '207YX0905X',
            primary: 'False',
            license: '25MB05069700',
            desc: 'Otolaryngology Otolaryngology/Facial Plastic Surgery' } ],
       basic_info:
        { credential: 'DO',
          name: 'Richard Scharf',
          first_name: 'Richard',
          last_name: 'Scharf',
          middle_name: 'C',
          gender: 'MALE' },
       address:
        [ { address_1: '505 Chestnut St',
            city: 'Rosell Park',
            state: 'NJ',
            postal_code: '07204',
            address_2: '',
            google_geocode:
             { geometry:
                { bounds:
                   { northeast: { lat: 40.6669036, lng: -74.2646986 },
                     southwest: { lat: 40.6667369, lng: -74.264969 } },
                  location: { lat: 40.6668063, lng: -74.2648142 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 40.6681692302915, lng: -74.2634848197085 },
                     southwest: { lat: 40.6654712697085, lng: -74.2661827802915 } } },
               place_id: 'ChIJXR_n94eyw4kRO0q_SbOUCAU' },
            telephone_number: '908-241-0200',
            times:
             [ { days: [ 1 ], hours: [ { start: '0900', end: '1930' } ] },
               { days: [ 2, 3, 4, 5 ],
                 hours: [ { start: '0900', end: '1700' } ] } ] } ],
       physician_info:
        { education_training:
           [ 'Kansas City University Of Medicine & Bioscience College Of Osteopathic Med, 1986' ],
          hospital_affiliations:
           [ 'West, Scharf, Conte, Bastianelli And Mazzoni Medical Group' ] },
       relationship: {},
       alyvant_insights:
        [ { header: 'Samples Dropped',
            body: 'HCP did not receive any samples in June 2019' },
          { header: 'Calls Received',
            body: 'HCP received 4 call(s) in June 2019' },
          { header: 'ALK Calls',
            body: 'Received 0 ALK Odactra Calls in 2018' },
          { header: 'Current ALK Overlap',
            body:
             'This HCP is affiliated with a practice that ALK is also targeting' },
          { header: 'NJ License',
            body: 'Has a valid medical license in the state of New Jersey' } ],
       patient_info:
        [ { title: '12 Month Claims Data',
            rows:
             [ { key: 'SCIT Claims 2018', value: '250' },
               { key: 'SLIT Claims Last 12 Months', value: '0' },
               { key: 'Allergy Test Claims 2018', value: '10' },
               { key: 'Other Allergic Rhinitis TRx Claims 2018', value: '130' } ] },
          { title: 'In Promotional Period',
            rows:
             [ { key: 'Savings Card Redemptions (as of 11/4)', value: '0' },
               { key: 'ALK Product Prescriptions (as of 10/25)', value: '0' } ] } ],
       products: [],
       call_log_form_id: 'immutableFormID',
       is_active: true,
       signals: [] },
     { header:
        { createdBy:
           '/usr/local/lib/python3.6/dist-packages/alyvant_sales_rep_app/sales_rep_app_object_manager.py',
          createEpoch: 1574197280,
          objectType: 'Provider',
          refId: 'what is this',
          version: '1',
          uri: 'aly://test' },
       id: '4ef3a928-e320-4933-a604-cd577ec862b7',
       enumeration_type: 'NPI-1',
       npi_number: 1861480295,
       taxonomies:
        [ { code: '174400000X',
            desc: 'Specialist',
            primary: 'True',
            state: 'NJ',
            license: 'MA07251300' } ],
       basic_info:
        { credential: 'M.D.',
          name: 'Masayuki Inouye',
          first_name: 'Masayuki',
          last_name: 'Inouye',
          gender: 'MALE' },
       address:
        [ { address_1: '20 Prospect Avenue',
            address_2: 'Suite 613',
            city: 'Hackensack',
            state: 'NJ',
            postal_code: '7601',
            google_geocode:
             { geometry:
                { bounds:
                   { northeast: { lat: 40.8841147, lng: -74.0563682 },
                     southwest: { lat: 40.8826786, lng: -74.0579186 } },
                  location: { lat: 40.883251, lng: -74.0570006 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 40.8847456302915, lng: -74.05579441970849 },
                     southwest: { lat: 40.8820476697085, lng: -74.0584923802915 } } },
               place_id:
                'Ei82MTMsIDIwIFByb3NwZWN0IEF2ZSwgSGFja2Vuc2FjaywgTkogMDc2MDEsIFVTQSIfGh0KFgoUChIJay3ngYr5wokRNBY4BUevU_ESAzYxMw' },
            telephone_number: '201-489-6520',
            times:
             [ { days: [ 1, 2, 3, 4, 5 ],
                 hours: [ { start: '0900', end: '1700' } ] } ] } ],
       physician_info:
        { education_training:
           [ 'School Of Medicine At Stony Brook University Medical Center, 1996' ],
          hospital_affiliations:
           [ 'Hackensack University Medical Center',
             'Bergen Ent',
             'Meadows Surgery Center' ] },
       relationship: {},
       alyvant_insights:
        [ { header: 'Calls Received',
            body: 'HCP received 2 call(s) in June 2019' },
          { header: 'ALK Calls',
            body: 'Received 0 ALK Odactra Calls in 2018' },
          { header: 'NJ License',
            body: 'Has a valid medical license in the state of New Jersey' } ],
       patient_info:
        [ { title: '12 Month Claims Data',
            rows:
             [ { key: 'SCIT Claims 2018', value: 'Restricted' },
               { key: 'SLIT Claims Last 12 Months', value: 'Restricted' },
               { key: 'Allergy Test Claims 2018', value: 'Restricted' },
               { key: 'Other Allergic Rhinitis TRx Claims 2018',
                 value: 'Restricted' } ] },
          { title: 'In Promotional Period',
            rows:
             [ { key: 'Savings Card Redemptions (as of 11/4)',
                 value: 'Restricted' },
               { key: 'ALK Product Prescriptions (as of 10/25)',
                 value: 'Restricted' } ] } ],
       products: [],
       call_log_form_id: 'immutableFormID',
       is_active: true,
       signals: [] },
     { header:
        { createdBy:
           '/usr/local/lib/python3.6/dist-packages/alyvant_sales_rep_app/sales_rep_app_object_manager.py',
          createEpoch: 1574197280,
          objectType: 'Provider',
          refId: 'what is this',
          version: '1',
          uri: 'aly://test' },
       id: '6d7e16e4-5e9d-461a-bba6-15168367d60b',
       enumeration_type: 'NPI-1',
       npi_number: 1104840503,
       taxonomies:
        [ { code: '207R00000X',
            desc: 'Internal Medicine',
            primary: 'True',
            state: 'NY',
            license: '217034' } ],
       basic_info:
        { credential: 'M.D.',
          name: 'Peter Pasley',
          first_name: 'Peter',
          last_name: 'Pasley',
          middle_name: 'M.',
          gender: 'MALE' },
       address:
        [ { address_1: '264 Boyden Ave',
            city: 'Maplewood',
            state: 'NJ',
            postal_code: '07040',
            address_2: '',
            google_geocode:
             { geometry:
                { bounds:
                   { northeast: { lat: 40.722358, lng: -74.2543463 },
                     southwest: { lat: 40.7221192, lng: -74.2546751 } },
                  location: { lat: 40.7222488, lng: -74.2544989 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 40.72358758029151, lng: -74.25316171970849 },
                     southwest: { lat: 40.72088961970851, lng: -74.2558596802915 } } },
               place_id: 'ChIJQ_3Kwvqsw4kRHPawSHCD4YI' },
            telephone_number: '973-761-5200',
            times:
             [ { days: [ 2, 3, 5 ], hours: [ { start: '0800', end: '1500' } ] } ] },
          { address_1: '50 Newark Ave',
            address_2: 'Ste 205',
            city: 'Belleville',
            state: 'NJ',
            postal_code: '07109',
            google_geocode:
             { geometry:
                { bounds:
                   { northeast: { lat: 40.7847611, lng: -74.17791299999999 },
                     southwest: { lat: 40.7844164, lng: -74.178405 } },
                  location: { lat: 40.7846009, lng: -74.1781843 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 40.78593773029149, lng: -74.17681001970848 },
                     southwest: { lat: 40.7832397697085, lng: -74.17950798029149 } } },
               place_id:
                'Ei0yMDUsIDUwIE5ld2FyayBBdmUsIEJlbGxldmlsbGUsIE5KIDA3MTA5LCBVU0EiHxodChYKFAoSCTudpTcCVcKJEcb8k-mIdPp_EgMyMDU' },
            telephone_number: '973-429-2209',
            times:
             [ { days: [ 4 ], hours: [ { start: '0800', end: '1500' } ] } ] },
          { address_1: '55 Morris Ave',
            address_2: 'Ste 100',
            city: 'Springfield Township',
            state: 'NJ',
            postal_code: '07081',
            google_geocode:
             { geometry:
                { bounds:
                   { northeast: { lat: 40.70883920000001, lng: -74.3042653 },
                     southwest: { lat: 40.7085428, lng: -74.30475729999999 } },
                  location: { lat: 40.7086663, lng: -74.3045337 },
                  location_type: 'ROOFTOP',
                  viewport:
                   { northeast: { lat: 40.7100399802915, lng: -74.30316231970849 },
                     southwest: { lat: 40.70734201970851, lng: -74.30586028029151 } } },
               place_id:
                'EjcxMDAsIDU1IE1vcnJpcyBBdmUsIFNwcmluZ2ZpZWxkIFRvd25zaGlwLCBOSiAwNzA4MSwgVVNBIh8aHQoWChQKEglpVWG1263DiRGjj7Ju8l3DdRIDMTAw' },
            telephone_number: '973-788-5170',
            times:
             [ { days: [ 1 ], hours: [ { start: '0800', end: '1200' } ] } ] } ],
       physician_info:
        { education_training: [ 'Rutgers Robert Wood Johnson Medical School, 1995' ],
          hospital_affiliations:
           [ 'Empire Medical Associates, Pc',
             'Nyu Langone Orthopedic Hospital',
             'Clara Maass Medical Center',
             'Pasley, Peter, Office',
             'Richmond University Medical Center' ] },
       relationship: {},
       alyvant_insights:
        [ { header: 'Calls Received',
            body: 'HCP received 1 call(s) in June 2019' },
          { header: 'ALK Calls',
            body: 'Received 0 ALK Odactra Calls in 2018' },
          { header: 'More Likely to Perform Test',
            body:
             'Had a relatively low SCIT to allergy test claims ratio in 2018' },
          { header: 'More Likely to Treat Symptoms vs. Cause',
            body:
             'Had relatively high alternative TRx Claims to SCIT Claims ratio in 2018' },
          { header: 'NJ License',
            body: 'Has a valid medical license in the state of New Jersey' } ],
       patient_info:
        [ { title: '12 Month Claims Data',
            rows:
             [ { key: 'SCIT Claims 2018', value: '30' },
               { key: 'SLIT Claims Last 12 Months', value: '0' },
               { key: 'Allergy Test Claims 2018', value: '7' },
               { key: 'Other Allergic Rhinitis TRx Claims 2018', value: '50' } ] },
          { title: 'In Promotional Period',
            rows:
             [ { key: 'Savings Card Redemptions (as of 11/4)', value: '0' },
               { key: 'ALK Product Prescriptions (as of 10/25)', value: '0' } ] } ],
       products: [],
       call_log_form_id: 'immutableFormID',
       is_active: true,
       signals: [] } ] }
