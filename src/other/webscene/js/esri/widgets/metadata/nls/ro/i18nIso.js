define(
   ({
  	
    documentTypes: {
    	data: {
    		caption: "Ă_ISO 19115 (Data)______ș",
    		description: ""
    	},
    	service: {
    		caption: "Ă_ISO 19119 (Service)_______ș",
    		description: ""
    	},
    	gmi: {
    		caption: "Ă_ISO 19115-2 (Imagery and Gridded Data)____________ș",
    		description: ""
    	}
    },
    
    general: {
    	reference: "Ă_Reference____ș"
    },
    
    sections: {
    	metadata: "Ă_Metadata___ș",
    	identification: "Ă_Identification_____ș",
    	distribution: "Ă_Distribution_____ș",
    	quality: "Ă_Quality___ș",
    	acquisition: "Ă_Acquisition____ș"
    },
    
    metadataSection: {
    	identifier: "Ă_Identifier____ș",
    	contact: "Ă_Contact___ș",
    	date: "Ă_Date__ș",
    	standard: "Ă_Standard___ș",
    	reference: "Ă_Reference____ș"
    },
    
    identificationSection: {
    	citation: "Ă_Citation___ș",
    	description: "Ă_Description____ș",
    	contact: "Ă_Contact___ș",
    	thumbnail: "Ă_Thumbnail____ș",
    	keywords: "Ă_Keywords___ș",
    	constraints: "Ă_Constraints____ș",
    	resource: "Ă_Resource___ș",
    	resourceTab: {
    		representation: "Ă_Representation_____ș",
    		language: "Ă_Language___ș",
    		classification: "Ă_Classification_____ș",
    		extent: "Ă_Extent___ș"
    	},
    	serviceResourceTab: {
    		serviceType: "Ă_Service Type_____ș",
    		extent: "Ă_Extent___ș",
    		couplingType: "Ă_Coupling Type_____ș",
    		operation: "Ă_Operation____ș",
    		operatesOn: "Ă_Operates On____ș"
    	}
    },
    
    distributionSection: {
    },
    
    qualitySection: {
    	scope: "Ă_Scope___ș",
    	conformance: "Ă_Conformance____ș",
    	lineage: "Ă_Lineage___ș"
    },
    
    acquisitionSection: {
    	requirement: "Ă_Requirement____ș",
    	objective: "Ă_Objective____ș",
    	instrument: "Ă_Instrument____ș",
    	plan: "Ă_Plan__ș",
    	operation: "Ă_Operation____ș",
    	platform: "Ă_Platform___ș",
    	environment: "Ă_Environment____ș"
    },
    
    AbstractMD_Identification: {
    	sAbstract: "Ă_Abstract___ș",
    	purpose: "Ă_Purpose___ș",
    	credit: "Ă_Credits___ș",
    	pointOfContact: "Ă_Point of Contact______ș",
    	resourceMaintenance: "Ă_Maintenance____ș",
    	graphicOverview: "Ă_Graphic Overview______ș",
    	descriptiveKeywords: "Ă_Keyword Collection______ș",
    	resourceConstraints: "Ă_Constraints____ș"
    },
    
    CI_Address: {
    	deliveryPoint: "Ă_Delivery Point_____ș",
    	city: "Ă_City__ș",
    	administrativeArea: "Ă_Administrative Area_______ș",
    	postalCode: "Ă_Postal Code____ș",
    	country: "Ă_Country___ș",
    	electronicMailAddress: "Ă_E-Mail Address_____ș"
    },
    
    CI_Citation: {
    	title: "Ă_Title___ș",
    	alternateTitle: "Ă_Alternate Title______ș",
    	identifier: "Ă_Unique Resource Identifier_________ș",
    	resource: {
    		title: "Ă_Resource Title_____ș",
    		date: "Ă_Resource Date_____ș"
    	},
    	specification: {
    		title: "Ă_Specification Title_______ș",
    		date: "Ă_Specification Date______ș"
    	}
    },
    
    CI_Contact: {
    	phone: "Ă_Phone___ș",
    	address: "Ă_Address___ș",
    	onlineResource: "Ă_Online Resource______ș",
    	hoursOfService: "Ă_Hours of Service______ș",
    	contactInstructions: "Ă_Contact Instructions_______ș"
    },
    
    CI_Date: {
    	date: "Ă_Date__ș",
    	dateType: "Ă_Date Type____ș"
    },
    
  	CI_DateTypeCode: {
  		caption: "Ă_Date Type____ș",
  		creation: "Ă_Creation Date_____ș",
  		publication: "Ă_Publication Date______ș",
  		revision: "Ă_Revision Date_____ș"
  	},
  	
    CI_OnLineFunctionCode: {
    	caption: "Ă_Function___ș",
    	download: "Ă_Download___ș",
    	information: "Ă_Information____ș",
    	offlineAccess: "Ă_Offline Access_____ș",
    	order: "Ă_Order___ș",
    	search: "Ă_Search___ș"
    },
    
    CI_OnlineResource: {
    	caption: "Ă_Online Resource______ș",
    	linkage: "Ă_URL__ș",
    	protocol: "Ă_Protocol___ș",
    	applicationProfile: "Ă_Application Profile_______ș",
    	name: "Ă_Name__ș",
    	description: "Ă_Description____ș",
    	sFunction: "Ă_Function___ș"
    },
    
    CI_ResponsibleParty: {
    	caption: "Ă_Point of Contact______ș",
    	individualName: "Ă_Individual Name______ș",
    	organisationName: "Ă_Organisation Name______ș",
    	positionName: "Ă_Position Name_____ș",
    	contactInfo: "Ă_Contact Info_____ș",
    	role: "Ă_Role__ș"
    },
    
    CI_RoleCode: {
    	caption: "Ă_Role__ș",
    	resourceProvider: "Ă_Resource Provider______ș",
    	custodian: "Ă_Custodian____ș",
    	owner: "Ă_Owner___ș",
    	user: "Ă_User__ș",
    	distributor: "Ă_Distributor____ș",
    	originator: "Ă_Originator____ș",
    	pointOfContact: "Ă_Point of Contact______ș",
    	principalInvestigator: "Ă_Principal Investigator________ș",
    	processor: "Ă_Processor____ș",
    	publisher: "Ă_Publisher____ș",
    	author: "Ă_Author___ș"
    },
    
    CI_Telephone: {
    	voice: "Ă_Voice___ș",
    	facsimile: "Ă_Fax__ș"
    },
    
    DCPList: {
    	caption: "Ă_DCP__ș",
    	XML: "Ă_XML__ș",
    	CORBA: "Ă_CORBA___ș",
    	JAVA: "Ă_JAVA__ș",
    	COM: "Ă_COM__ș",
    	SQL: "Ă_SQL__ș",
    	WebServices: "Ă_WebServices____ș"
    },
    
    DQ_ConformanceResult: {
    	caption: "Ă_Conformance Result______ș",
    	explanation: "Ă_Explanation____ș",
    	degree: {
    		caption: "Ă_Degree___ș",
    		validationPerformed: "Ă_Validation Performed_______ș",
    		conformant: "Ă_Conformant____ș",
    		nonConformant: "Ă_Non Conformant_____ș"
    	}
    },
    
    DQ_DataQuality: {
    	report: "Ă_Report___ș"
    },
    
    DQ_Scope : {
    	level: "Ă_Scope (quality information applies to)____________ș",
    	levelDescription: "Ă_Level Description______ș"
    },
    
    EX_Extent: {
    	caption: "Ă_Extent___ș",
    	description: "Ă_Description____ș",
    	geographicElement: "Ă_Spatial Extent_____ș",
    	temporalElement: "Ă_Temporal Extent______ș",
    	verticalElement: "Ă_Vertical Extent______ș"
    },
    
    EX_GeographicBoundingBox: {
    	westBoundLongitude: "Ă_West Bounding Longitude________ș",
    	eastBoundLongitude: "Ă_East Bounding Longitude________ș",
    	southBoundLatitude: "Ă_South Bounding Latitude________ș",
    	northBoundLatitude: "Ă_North Bounding Latitude________ș"
    },
    
    EX_GeographicDescription: {
    	caption: "Ă_Geographic Description________ș"
    },
    
    EX_TemporalExtent: {
    	TimePeriod: {
    		beginPosition: "Ă_Begin Date____ș",
    		endPosition: "Ă_End Date___ș"
    	}
    },
    
    EX_VerticalExtent: {
    	minimumValue: "Ă_Minimum Value_____ș",
    	maximumValue: "Ă_Maximum Value_____ș",
    	verticalCRS: "Ă_Vertical CRS_____ș"
    },
    
    Length: {
    	caption: "Ă_Length___ș",
    	uom: "Ă_Units of Measure______ș",
    	km: "Ă_Kilometers____ș",
    	m: "Ă_Meters___ș",
    	mi: "Ă_Miles___ș",
    	ft: "Ă_Feet__ș"
    },
    
    LI_Lineage: {
    	statement: "Ă_Lineage Statement______ș"
    },
    
    MD_BrowseGraphic: {
    	fileName: "Ă_Browse Graphic URL______ș",
    	fileDescription: "Ă_Browse Graphic Caption________ș",
    	fileType: "Ă_Browse Graphic Type_______ș"
    },
    
    MD_ClassificationCode: {
    	unclassified: "Ă_Unclassified_____ș",
    	restricted: "Ă_Restricted____ș",
    	confidential: "Ă_Confidential_____ș",
    	secret: "Ă_Secret___ș",
    	topSecret: "Ă_Top Secret____ș"
    },
    
    MD_Constraints: {
    	caption: "Ă_Usage Constraints______ș",
    	useLimitation: "Ă_Use Limitation_____ș"
    },
    
    MD_DataIdentification: {
    	spatialRepresentationType: "Ă_Spatial Representation Type_________ș",
    	spatialResolution: "Ă_Spatial Resolution______ș",
    	language: "Ă_Resource Language______ș",
    	supplementalInformation: "Ă_Supplemental_____ș"
    },
    
    MD_DigitalTransferOptions: {
    	onLine: "Ă_Online___ș"
    },
    
    MD_Distribution: {
    	distributionFormat: "Ă_Distribution Format_______ș",
    	transferOptions: "Ă_Transfer Options______ș"
    },
    
    MD_Format: {
    	name: "Ă_Format Name____ș",
    	version: "Ă_Format Version_____ș"
    },
    
    MD_Identifier: {
    	caption: "Ă_URI__ș",
    	identifierCaption: "Ă_Identifier____ș",
    	code: "Ă_Code__ș"
    },
    
    MD_Keywords: {
    	delimitedCaption: "Ă_Keywords___ș",
    	thesaurusName: "Ă_Associated Thesaurus_______ș"
    },
    
    MD_KeywordTypeCode: {
    	caption: "Ă_Keyword Type_____ș",
    	discipline: "Ă_Discipline____ș",
    	place: "Ă_Place___ș",
    	stratum: "Ă_Stratum___ș",
    	temporal: "Ă_Temporal___ș",
    	theme: "Ă_Theme___ș"
    },
    
    MD_LegalConstraints: {
    	caption: "Ă_Legal Constraints______ș",
    	accessConstraints: "Ă_Access Constraints______ș",
    	useConstraints: "Ă_Use Constraints______ș",
    	otherConstraints: "Ă_Other Constraints______ș"
    },
    
    MD_MaintenanceFrequencyCode: {
    	caption: "Ă_Frequency____ș",
    	continual: "Ă_Continual____ș",
    	daily: "Ă_Daily___ș",
    	weekly: "Ă_Weekly___ș",
    	fortnightly: "Ă_Fortnightly____ș",
    	monthly: "Ă_Monthly___ș",
    	quarterly: "Ă_Quarterly____ș",
    	biannually: "Ă_Biannually____ș",
    	annually: "Ă_Annually___ș",
    	asNeeded: "Ă_As Needed____ș",
    	irregular: "Ă_Irregular____ș",
    	notPlanned: "Ă_Not Planned____ș",
    	unknown: "Ă_Unknown___ș"
    },
    
    MD_Metadata: {
    	caption: "Ă_Metadata___ș",
    	fileIdentifier: "Ă_File Identifier______ș",
    	language: "Ă_Metadata Language______ș",
    	hierarchyLevel: "Ă_Hierarchy Level______ș",
    	hierarchyLevelName: "Ă_Hierarchy Level Name_______ș",
    	contact: "Ă_Metadata Contact______ș",
    	dateStamp: "Ă_Metadata Date_____ș",
    	metadataStandardName: "Ă_Metadata Standard Name________ș",
    	metadataStandardVersion: "Ă_Metadata Standard Version_________ș",
    	referenceSystemInfo: "Ă_Reference System______ș",
    	identificationInfo: "Ă_Identification_____ș",
    	distributionInfo: "Ă_Distribution_____ș",
    	dataQualityInfo: "Ă_Quality___ș"
    },
    
    MD_ProgressCode: {
    	caption: "Ă_Progress Code_____ș",
    	completed: "Ă_Completed____ș",
    	historicalArchive: "Ă_Historical Archive______ș",
    	obsolete: "Ă_Obsolete___ș",
    	onGoing: "Ă_On Going___ș",
    	planned: "Ă_Planned___ș",
    	required: "Ă_Required___ș",
    	underDevelopment: "Ă_Under Development______ș"
    },
    
    MD_RepresentativeFraction: {
    	denominator: "Ă_Denominator____ș"
    },
    
    MD_Resolution: {
    	equivalentScale: "Ă_Equivalent Scale______ș",
    	distance: "Ă_Distance___ș"
    },
    
    MD_RestrictionCode: {
    	copyright: "Ă_Copyright____ș",
    	patent: "Ă_Patent___ș",
    	patentPending: "Ă_Patent Pending_____ș",
    	trademark: "Ă_Trademark____ș",
    	license: "Ă_License___ș",
    	intellectualPropertyRights: "Ă_Intellectual Property Rights_________ș",
    	restricted: "Ă_Restricted____ș",
    	otherRestrictions: "Ă_Other Restrictions______ș"
    },
    
    MD_ScopeCode: {
    	attribute: "Ă_Attribute____ș",
    	attributeType: "Ă_Attribute type_____ș",
    	collectionHardware: "Ă_Collection hardware_______ș",
    	collectionSession: "Ă_Collection session______ș",
    	dataset: "Ă_Dataset___ș",
    	series: "Ă_Series___ș",
    	nonGeographicDataset: "Ă_Non geographic dataset________ș",
    	dimensionGroup: "Ă_Dimension group______ș",
    	feature: "Ă_Feature___ș",
    	featureType: "Ă_Feature type_____ș",
    	propertyType: "Ă_Property type_____ș",
    	fieldSession: "Ă_Field session_____ș",
    	software: "Ă_Software___ș",
    	service: "Ă_Service___ș",
    	model: "Ă_Model___ș",
    	tile: "Ă_Tile__ș"
    },
    
    MD_ScopeDescription: {
    	attributes: "Ă_Attributes____ș",
    	features: "Ă_Features___ș",
    	featureInstances: "Ă_Feature Instances______ș",
    	attributeInstances: "Ă_Attribute Instances_______ș",
    	dataset: "Ă_Dataset___ș",
    	other: "Ă_Other___ș"
    },
    
    MD_SecurityConstraints: {
    	caption: "Ă_Security Constraints_______ș",
    	classification: "Ă_Classification_____ș",
    	userNote: "Ă_User Note____ș",
    	classificationSystem: "Ă_Classification System_______ș",
    	handlingDescription: "Ă_Handling Description_______ș"
    },
    
    MD_SpatialRepresentationTypeCode: {
    	caption: "Ă_Spatial Representation Type_________ș",
    	vector: "Ă_Vector___ș",
    	grid: "Ă_Grid__ș",
    	textTable: "Ă_Text Table____ș",
    	tin: "Ă_TIN__ș",
    	stereoModel: "Ă_Stereo Model_____ș",
    	video: "Ă_Video___ș"
    },
    
    MD_TopicCategoryCode: {
    	caption: "Ă_Topic Category_____ș",
    	boundaries: "Ă_Administrative and Political Boundaries_____________ș",
    	farming: "Ă_Agriculture and Farming________ș",
    	climatologyMeteorologyAtmosphere: "Ă_Atmosphere and Climatic________ș",
    	biota: "Ă_Biology and Ecology_______ș",
    	economy: "Ă_Business and Economic_______ș",
    	planningCadastre: "Ă_Cadastral____ș",
    	society: "Ă_Cultural, Society and Demography___________ș",
    	elevation: "Ă_Elevation and Derived Products__________ș",
    	environment: "Ă_Environment and Conservation_________ș",
    	structure: "Ă_Facilities and Structures_________ș",
    	geoscientificInformation: "Ă_Geological and Geophysical_________ș",
    	health: "Ă_Human Health and Disease________ș",
    	imageryBaseMapsEarthCover: "Ă_Imagery and Base Maps_______ș",
    	inlandWaters: "Ă_Inland Water Resources________ș",
    	location: "Ă_Locations and Geodetic Networks__________ș",
    	intelligenceMilitary: "Ă_Military___ș",
    	oceans: "Ă_Oceans and Estuaries_______ș",
    	transportation: "Ă_Transportation Networks________ș",
    	utilitiesCommunication: "Ă_Utilities and Communication_________ș"
    },
    
    MI_ContextCode: {
    	caption: "Ă_Context___ș",
    	acquisition: "Ă_Acquisition____ș",
    	pass: "Ă_Pass__ș",
    	wayPoint: "Ă_Waypoint___ș"
    },
    
    MI_EnvironmentalRecord: {
    	caption: "Ă_Environmental Conditions________ș",
    	averageAirTemperature: "Ă_Average Air Temperature________ș",
    	maxRelativeHumidity: "Ă_Maximum Relative Humidity_________ș",
    	maxAltitude: "Ă_Maximum Altitude______ș",
    	meterologicalConditions: "Ă_Meterological Conditions________ș"
    },
    
    MI_Event: {
    	identifier: "Ă_Event Identifier______ș",
    	time: "Ă_Time__ș",
    	expectedObjectiveReference: "Ă_Expected Objective (Objective Identifer)_____________ș",
    	relatedSensorReference: "Ă_Related Sensor (Instrument Identifer)____________ș",
    	relatedPassReference: "Ă_Related Pass (Platform Pass Identifer)____________ș"
    },

    MI_GeometryTypeCode: {
    	point: "Ă_Point___ș",
    	linear: "Ă_Linear___ș",
    	areal: "Ă_Areal___ș",
    	strip: "Ă_Strip___ș"
    },
    
    MI_Instrument: {
    	citation: "Ă_Instrument Citation_______ș",
    	identifier: "Ă_Instrument Identifier_______ș",
    	sType: "Ă_Instrument Type______ș",
    	description: "Ă_Instrument Description________ș",
    	mountedOn: "Ă_Mounted On____ș",
    	mountedOnPlatformReference: "Ă_Mounted On (Platform Identifier)___________ș"
    },
    
    MI_Metadata: {
    	acquisitionInformation: "Ă_Acquisition____ș"
    },
    
    MI_Objective: {
    	caption: "Ă_Objective____ș",
    	identifier: "Ă_Objective Identifier_______ș",
    	priority: "Ă_Priority of Target______ș",
    	sFunction: "Ă_Function of Objective_______ș",
    	extent: "Ă_Extent___ș",
    	pass: "Ă_Platform Pass_____ș",
    	sensingInstrumentReference: "Ă_Sensing Instrument (Instrument Identifier)______________ș",
    	objectiveOccurrence: "Ă_Events___ș",
    	sections: {
    		identification: "Ă_Identification_____ș",
    		extent: "Ă_Extent___ș",
    		pass: "Ă_Pass__ș",
    		sensingInstrument: "Ă_Sensing Instrument______ș",
    		objectiveOccurrence: "Ă_Events___ș"
    	}
    },
    
    MI_ObjectiveTypeCode: {
    	caption: "Ă_Type (Collection Technique for Objective)_____________ș",
    	instantaneousCollection: "Ă_Instantaneous Collection________ș",
    	persistentView: "Ă_Persistent View______ș",
    	survey: "Ă_Survey___ș"
    },
    
    MI_Operation: {
    	caption: "Ă_Operation____ș",
    	description: "Ă_Operation Description_______ș",
    	citation: "Ă_Operation Citation______ș",
    	identifier: "Ă_Operation Identifier_______ș",
    	status: "Ă_Operation Status______ș",
    	objectiveReference: "Ă_Related Objective (Objective Identifier)_____________ș",
    	planReference: "Ă_Related Plan (Plan Identifier)__________ș",
    	significantEventReference: "Ă_Related Event (Event Identifier)___________ș",
    	platformReference: "Ă_Related Platform (Platform Identifier)____________ș",
    	sections: {
    		identification: "Ă_Identification_____ș",
    		related: "Ă_Related___ș"
    	}
    },
    
    MI_OperationTypeCode: {
    	caption: "Ă_Operation Type_____ș",
    	real: "Ă_Real__ș",
    	simulated: "Ă_Simulated____ș",
    	synthesized: "Ă_Synthesized____ș"
    },
    
    MI_Plan: {
    	sType: "Ă_Sampling Geometry for Collecting Data____________ș",
    	status: "Ă_Status of Plan_____ș",
    	citation: "Ă_Citation of Authority Requesting Collection______________ș",
    	satisfiedRequirementReference: "Ă_Satisfied Requirement (Requirement Identifier)_______________ș",
    	operationReference: "Ă_Related Operation (Operation Identifier)_____________ș"
    },
    
    MI_Platform: {
    	citation: "Ă_Platform Citation______ș",
    	identifier: "Ă_Platform Identifier_______ș",
    	description: "Ă_Description of Platform Supporting the Instrument________________ș",
    	sponsor: "Ă_Sponsor Organization for Platform___________ș",
    	instrument: "Ă_Instrument(s) mounted on the platform____________ș",
    	instrumentReference: "Ă_Instrument Identifier_______ș",
    	sections: {
    		identification: "Ă_Identification_____ș",
    		sponsor: "Ă_Sponsor___ș",
    		instruments: "Ă_Instruments____ș"
    	}
    },
    
    MI_PlatformPass: {
    	identifier: "Ă_Platform Pass Identifier________ș",
    	extent: "Ă_Platform Pass Extent_______ș",
    	relatedEventReference: "Ă_Related Event (Event Identifer)__________ș"
    },

    MI_PriorityCode: {
    	critical: "Ă_Critical___ș", 
    	highImportance: "Ă_High Importance______ș",
    	mediumImportance: "Ă_Medium Importance______ș",
    	lowImportance: "Ă_Low Importance_____ș"
    },
    
    MI_RequestedDate : {
    	requestedDateOfCollection: "Ă_Requested Date Of Collection_________ș",
    	latestAcceptableDate: "Ă_Latest Acceptable Date________ș"
    },
    
    MI_Requirement: {
    	caption: "Ă_Requirement____ș",
    	citation: "Ă_Citation for Requirement Guidance Material______________ș",
    	identifier: "Ă_Requirement Identifier________ș",
    	requestor: "Ă_Requestor of Requirement________ș",
    	recipient: "Ă_Recipient of Requirement Results___________ș",
    	priority: "Ă_Requirement Priority_______ș",
    	requestedDate: "Ă_Requested Date_____ș",
    	expiryDate: "Ă_Expiry Date____ș",
    	satisifiedPlanReference: "Ă_Satisfied Plan (Plan Identifier)___________ș",
    	sections: {
    		identification: "Ă_Identification_____ș",
    		requestor: "Ă_Requestor____ș",
    		recipient: "Ă_Recipient____ș",
    		priorityAndDates: "Ă_Priority And Dates______ș",
    		satisifiedPlan: "Ă_Satisified  Plan______ș"
    	}
    },
    
    MI_SequenceCode: {
    	caption: "Ă_Sequence___ș",
    	start: "Ă_Start___ș",
    	end: "Ă_End__ș",
    	instantaneous: "Ă_Instantaneous_____ș"
    },
    
    MI_TriggerCode: {
    	caption: "Ă_Trigger___ș",
    	automatic: "Ă_Automatic____ș",
    	manual: "Ă_Manual___ș",
    	preProgrammed: "Ă_Preprogrammed_____ș"
    },
    
    ObjectReference: {
    	uuidref: "Ă_UUID Reference_____ș",
    	xlinkref: "Ă_URL Reference_____ș"
    },
    
    RS_Identifier: {
    	caption: "Ă_ID Plus Code Space______ș",
    	code: "Ă_Code__ș",
    	codeSpace: "Ă_Code Space____ș"
    },
    
    SV_CouplingType: {
    	loose: "Ă_Loose___ș",
    	mixed: "Ă_Mixed___ș",
    	tight: "Ă_Tight___ș"
    },
    
    SV_OperationMetadata: {
    	operationName: "Ă_Operation Name_____ș",
    	DCP: "Ă_DCP__ș",
    	connectPoint: "Ă_Connect Point_____ș"
    },
    
    SV_ServiceIdentification: {
    	serviceType: "Ă_ServiceType____ș",
    	couplingType: "Ă_Coupling Type_____ș",
    	containsOperations: "Ă_Operation Metadata______ș",
    	operatesOn: "Ă_Operates On____ș"
    },
    
    TM_Primitive: {
    	indeterminatePosition: "Ă_Indeterminate Position________ș",
    	indeterminates: {
    		before: "Ă_Before___ș",
       	after: "Ă_After___ș",
      	now: "Ă_Now__ș",
      	unknown: "Ă_Unknown___ș"
    	}
    },
    
    gemet: {
    	concept: {
    		gemetConceptKeyword: "Ă_GEMET Concept Keyword_______ș",
    		tool: "Ă_Look Up____ș...",
    		dialogTitle: "Ă_GEMET - Concept Keyword________ș",
    		searchLabel: "Ă_Search___ș:",
    		searchTip: "Ă_Search GEMET_____ș"
    	},
    	theme: {
    		tool: "Ă_Look Up____ș...",
    		dialogTitle: "Ă_GEMET - Inspire Data Theme_________ș"
    	},
    	ioerror: "Ă_There was an error communicating with the GEMET service: {url}____________________ș",
    	searching: "Ă_Searching GEMET______ș...",
    	noMatch: "Ă_No matching results were found__________ș.",
      languages: {
      	"bg": "Ă_Bulgarian____ș",
      	"cs": "Ă_Czech___ș",
      	"da": "Ă_Danish___ș",
      	"nl": "Ă_Dutch___ș",
      	"en": "Ă_English___ș",
      	"et": "Ă_Estonian___ș",
      	"fi": "Ă_Finnish___ș",
      	"fr": "Ă_French___ș",
      	"de": "Ă_German___ș",
      	"el": "Ă_Greek___ș",
      	"hu": "Ă_Hungarian____ș",
      	"ga": "Ă_Gaelic (Irish)_____ș",
      	"it": "Ă_Italian___ș",
      	"lv": "Ă_Latvian___ș",
      	"lt": "Ă_Lithuanian____ș",
      	"mt": "Ă_Maltese___ș",
      	"pl": "Ă_Polish___ș", 
      	"pt": "Ă_Portuguese____ș",
      	"ro": "Ă_Romanian___ș",
      	"sk": "Ă_Slovak___ș",
      	"sl": "Ă_Slovenian____ș",  	
      	"es": "Ă_Spanish___ș",
      	"sv": "Ă_Swedish___ș"
      }
    }
   
  })
);
