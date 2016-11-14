define(
   ({
  	
    documentTypes: {
    	data: {
    		caption: "Ř_ISO 19115 (Data)______ů",
    		description: ""
    	},
    	service: {
    		caption: "Ř_ISO 19119 (Service)_______ů",
    		description: ""
    	},
    	gmi: {
    		caption: "Ř_ISO 19115-2 (Imagery and Gridded Data)____________ů",
    		description: ""
    	}
    },
    
    general: {
    	reference: "Ř_Reference____ů"
    },
    
    sections: {
    	metadata: "Ř_Metadata___ů",
    	identification: "Ř_Identification_____ů",
    	distribution: "Ř_Distribution_____ů",
    	quality: "Ř_Quality___ů",
    	acquisition: "Ř_Acquisition____ů"
    },
    
    metadataSection: {
    	identifier: "Ř_Identifier____ů",
    	contact: "Ř_Contact___ů",
    	date: "Ř_Date__ů",
    	standard: "Ř_Standard___ů",
    	reference: "Ř_Reference____ů"
    },
    
    identificationSection: {
    	citation: "Ř_Citation___ů",
    	description: "Ř_Description____ů",
    	contact: "Ř_Contact___ů",
    	thumbnail: "Ř_Thumbnail____ů",
    	keywords: "Ř_Keywords___ů",
    	constraints: "Ř_Constraints____ů",
    	resource: "Ř_Resource___ů",
    	resourceTab: {
    		representation: "Ř_Representation_____ů",
    		language: "Ř_Language___ů",
    		classification: "Ř_Classification_____ů",
    		extent: "Ř_Extent___ů"
    	},
    	serviceResourceTab: {
    		serviceType: "Ř_Service Type_____ů",
    		extent: "Ř_Extent___ů",
    		couplingType: "Ř_Coupling Type_____ů",
    		operation: "Ř_Operation____ů",
    		operatesOn: "Ř_Operates On____ů"
    	}
    },
    
    distributionSection: {
    },
    
    qualitySection: {
    	scope: "Ř_Scope___ů",
    	conformance: "Ř_Conformance____ů",
    	lineage: "Ř_Lineage___ů"
    },
    
    acquisitionSection: {
    	requirement: "Ř_Requirement____ů",
    	objective: "Ř_Objective____ů",
    	instrument: "Ř_Instrument____ů",
    	plan: "Ř_Plan__ů",
    	operation: "Ř_Operation____ů",
    	platform: "Ř_Platform___ů",
    	environment: "Ř_Environment____ů"
    },
    
    AbstractMD_Identification: {
    	sAbstract: "Ř_Abstract___ů",
    	purpose: "Ř_Purpose___ů",
    	credit: "Ř_Credits___ů",
    	pointOfContact: "Ř_Point of Contact______ů",
    	resourceMaintenance: "Ř_Maintenance____ů",
    	graphicOverview: "Ř_Graphic Overview______ů",
    	descriptiveKeywords: "Ř_Keyword Collection______ů",
    	resourceConstraints: "Ř_Constraints____ů"
    },
    
    CI_Address: {
    	deliveryPoint: "Ř_Delivery Point_____ů",
    	city: "Ř_City__ů",
    	administrativeArea: "Ř_Administrative Area_______ů",
    	postalCode: "Ř_Postal Code____ů",
    	country: "Ř_Country___ů",
    	electronicMailAddress: "Ř_E-Mail Address_____ů"
    },
    
    CI_Citation: {
    	title: "Ř_Title___ů",
    	alternateTitle: "Ř_Alternate Title______ů",
    	identifier: "Ř_Unique Resource Identifier_________ů",
    	resource: {
    		title: "Ř_Resource Title_____ů",
    		date: "Ř_Resource Date_____ů"
    	},
    	specification: {
    		title: "Ř_Specification Title_______ů",
    		date: "Ř_Specification Date______ů"
    	}
    },
    
    CI_Contact: {
    	phone: "Ř_Phone___ů",
    	address: "Ř_Address___ů",
    	onlineResource: "Ř_Online Resource______ů",
    	hoursOfService: "Ř_Hours of Service______ů",
    	contactInstructions: "Ř_Contact Instructions_______ů"
    },
    
    CI_Date: {
    	date: "Ř_Date__ů",
    	dateType: "Ř_Date Type____ů"
    },
    
  	CI_DateTypeCode: {
  		caption: "Ř_Date Type____ů",
  		creation: "Ř_Creation Date_____ů",
  		publication: "Ř_Publication Date______ů",
  		revision: "Ř_Revision Date_____ů"
  	},
  	
    CI_OnLineFunctionCode: {
    	caption: "Ř_Function___ů",
    	download: "Ř_Download___ů",
    	information: "Ř_Information____ů",
    	offlineAccess: "Ř_Offline Access_____ů",
    	order: "Ř_Order___ů",
    	search: "Ř_Search___ů"
    },
    
    CI_OnlineResource: {
    	caption: "Ř_Online Resource______ů",
    	linkage: "Ř_URL__ů",
    	protocol: "Ř_Protocol___ů",
    	applicationProfile: "Ř_Application Profile_______ů",
    	name: "Ř_Name__ů",
    	description: "Ř_Description____ů",
    	sFunction: "Ř_Function___ů"
    },
    
    CI_ResponsibleParty: {
    	caption: "Ř_Point of Contact______ů",
    	individualName: "Ř_Individual Name______ů",
    	organisationName: "Ř_Organisation Name______ů",
    	positionName: "Ř_Position Name_____ů",
    	contactInfo: "Ř_Contact Info_____ů",
    	role: "Ř_Role__ů"
    },
    
    CI_RoleCode: {
    	caption: "Ř_Role__ů",
    	resourceProvider: "Ř_Resource Provider______ů",
    	custodian: "Ř_Custodian____ů",
    	owner: "Ř_Owner___ů",
    	user: "Ř_User__ů",
    	distributor: "Ř_Distributor____ů",
    	originator: "Ř_Originator____ů",
    	pointOfContact: "Ř_Point of Contact______ů",
    	principalInvestigator: "Ř_Principal Investigator________ů",
    	processor: "Ř_Processor____ů",
    	publisher: "Ř_Publisher____ů",
    	author: "Ř_Author___ů"
    },
    
    CI_Telephone: {
    	voice: "Ř_Voice___ů",
    	facsimile: "Ř_Fax__ů"
    },
    
    DCPList: {
    	caption: "Ř_DCP__ů",
    	XML: "Ř_XML__ů",
    	CORBA: "Ř_CORBA___ů",
    	JAVA: "Ř_JAVA__ů",
    	COM: "Ř_COM__ů",
    	SQL: "Ř_SQL__ů",
    	WebServices: "Ř_WebServices____ů"
    },
    
    DQ_ConformanceResult: {
    	caption: "Ř_Conformance Result______ů",
    	explanation: "Ř_Explanation____ů",
    	degree: {
    		caption: "Ř_Degree___ů",
    		validationPerformed: "Ř_Validation Performed_______ů",
    		conformant: "Ř_Conformant____ů",
    		nonConformant: "Ř_Non Conformant_____ů"
    	}
    },
    
    DQ_DataQuality: {
    	report: "Ř_Report___ů"
    },
    
    DQ_Scope : {
    	level: "Ř_Scope (quality information applies to)____________ů",
    	levelDescription: "Ř_Level Description______ů"
    },
    
    EX_Extent: {
    	caption: "Ř_Extent___ů",
    	description: "Ř_Description____ů",
    	geographicElement: "Ř_Spatial Extent_____ů",
    	temporalElement: "Ř_Temporal Extent______ů",
    	verticalElement: "Ř_Vertical Extent______ů"
    },
    
    EX_GeographicBoundingBox: {
    	westBoundLongitude: "Ř_West Bounding Longitude________ů",
    	eastBoundLongitude: "Ř_East Bounding Longitude________ů",
    	southBoundLatitude: "Ř_South Bounding Latitude________ů",
    	northBoundLatitude: "Ř_North Bounding Latitude________ů"
    },
    
    EX_GeographicDescription: {
    	caption: "Ř_Geographic Description________ů"
    },
    
    EX_TemporalExtent: {
    	TimePeriod: {
    		beginPosition: "Ř_Begin Date____ů",
    		endPosition: "Ř_End Date___ů"
    	}
    },
    
    EX_VerticalExtent: {
    	minimumValue: "Ř_Minimum Value_____ů",
    	maximumValue: "Ř_Maximum Value_____ů",
    	verticalCRS: "Ř_Vertical CRS_____ů"
    },
    
    Length: {
    	caption: "Ř_Length___ů",
    	uom: "Ř_Units of Measure______ů",
    	km: "Ř_Kilometers____ů",
    	m: "Ř_Meters___ů",
    	mi: "Ř_Miles___ů",
    	ft: "Ř_Feet__ů"
    },
    
    LI_Lineage: {
    	statement: "Ř_Lineage Statement______ů"
    },
    
    MD_BrowseGraphic: {
    	fileName: "Ř_Browse Graphic URL______ů",
    	fileDescription: "Ř_Browse Graphic Caption________ů",
    	fileType: "Ř_Browse Graphic Type_______ů"
    },
    
    MD_ClassificationCode: {
    	unclassified: "Ř_Unclassified_____ů",
    	restricted: "Ř_Restricted____ů",
    	confidential: "Ř_Confidential_____ů",
    	secret: "Ř_Secret___ů",
    	topSecret: "Ř_Top Secret____ů"
    },
    
    MD_Constraints: {
    	caption: "Ř_Usage Constraints______ů",
    	useLimitation: "Ř_Use Limitation_____ů"
    },
    
    MD_DataIdentification: {
    	spatialRepresentationType: "Ř_Spatial Representation Type_________ů",
    	spatialResolution: "Ř_Spatial Resolution______ů",
    	language: "Ř_Resource Language______ů",
    	supplementalInformation: "Ř_Supplemental_____ů"
    },
    
    MD_DigitalTransferOptions: {
    	onLine: "Ř_Online___ů"
    },
    
    MD_Distribution: {
    	distributionFormat: "Ř_Distribution Format_______ů",
    	transferOptions: "Ř_Transfer Options______ů"
    },
    
    MD_Format: {
    	name: "Ř_Format Name____ů",
    	version: "Ř_Format Version_____ů"
    },
    
    MD_Identifier: {
    	caption: "Ř_URI__ů",
    	identifierCaption: "Ř_Identifier____ů",
    	code: "Ř_Code__ů"
    },
    
    MD_Keywords: {
    	delimitedCaption: "Ř_Keywords___ů",
    	thesaurusName: "Ř_Associated Thesaurus_______ů"
    },
    
    MD_KeywordTypeCode: {
    	caption: "Ř_Keyword Type_____ů",
    	discipline: "Ř_Discipline____ů",
    	place: "Ř_Place___ů",
    	stratum: "Ř_Stratum___ů",
    	temporal: "Ř_Temporal___ů",
    	theme: "Ř_Theme___ů"
    },
    
    MD_LegalConstraints: {
    	caption: "Ř_Legal Constraints______ů",
    	accessConstraints: "Ř_Access Constraints______ů",
    	useConstraints: "Ř_Use Constraints______ů",
    	otherConstraints: "Ř_Other Constraints______ů"
    },
    
    MD_MaintenanceFrequencyCode: {
    	caption: "Ř_Frequency____ů",
    	continual: "Ř_Continual____ů",
    	daily: "Ř_Daily___ů",
    	weekly: "Ř_Weekly___ů",
    	fortnightly: "Ř_Fortnightly____ů",
    	monthly: "Ř_Monthly___ů",
    	quarterly: "Ř_Quarterly____ů",
    	biannually: "Ř_Biannually____ů",
    	annually: "Ř_Annually___ů",
    	asNeeded: "Ř_As Needed____ů",
    	irregular: "Ř_Irregular____ů",
    	notPlanned: "Ř_Not Planned____ů",
    	unknown: "Ř_Unknown___ů"
    },
    
    MD_Metadata: {
    	caption: "Ř_Metadata___ů",
    	fileIdentifier: "Ř_File Identifier______ů",
    	language: "Ř_Metadata Language______ů",
    	hierarchyLevel: "Ř_Hierarchy Level______ů",
    	hierarchyLevelName: "Ř_Hierarchy Level Name_______ů",
    	contact: "Ř_Metadata Contact______ů",
    	dateStamp: "Ř_Metadata Date_____ů",
    	metadataStandardName: "Ř_Metadata Standard Name________ů",
    	metadataStandardVersion: "Ř_Metadata Standard Version_________ů",
    	referenceSystemInfo: "Ř_Reference System______ů",
    	identificationInfo: "Ř_Identification_____ů",
    	distributionInfo: "Ř_Distribution_____ů",
    	dataQualityInfo: "Ř_Quality___ů"
    },
    
    MD_ProgressCode: {
    	caption: "Ř_Progress Code_____ů",
    	completed: "Ř_Completed____ů",
    	historicalArchive: "Ř_Historical Archive______ů",
    	obsolete: "Ř_Obsolete___ů",
    	onGoing: "Ř_On Going___ů",
    	planned: "Ř_Planned___ů",
    	required: "Ř_Required___ů",
    	underDevelopment: "Ř_Under Development______ů"
    },
    
    MD_RepresentativeFraction: {
    	denominator: "Ř_Denominator____ů"
    },
    
    MD_Resolution: {
    	equivalentScale: "Ř_Equivalent Scale______ů",
    	distance: "Ř_Distance___ů"
    },
    
    MD_RestrictionCode: {
    	copyright: "Ř_Copyright____ů",
    	patent: "Ř_Patent___ů",
    	patentPending: "Ř_Patent Pending_____ů",
    	trademark: "Ř_Trademark____ů",
    	license: "Ř_License___ů",
    	intellectualPropertyRights: "Ř_Intellectual Property Rights_________ů",
    	restricted: "Ř_Restricted____ů",
    	otherRestrictions: "Ř_Other Restrictions______ů"
    },
    
    MD_ScopeCode: {
    	attribute: "Ř_Attribute____ů",
    	attributeType: "Ř_Attribute type_____ů",
    	collectionHardware: "Ř_Collection hardware_______ů",
    	collectionSession: "Ř_Collection session______ů",
    	dataset: "Ř_Dataset___ů",
    	series: "Ř_Series___ů",
    	nonGeographicDataset: "Ř_Non geographic dataset________ů",
    	dimensionGroup: "Ř_Dimension group______ů",
    	feature: "Ř_Feature___ů",
    	featureType: "Ř_Feature type_____ů",
    	propertyType: "Ř_Property type_____ů",
    	fieldSession: "Ř_Field session_____ů",
    	software: "Ř_Software___ů",
    	service: "Ř_Service___ů",
    	model: "Ř_Model___ů",
    	tile: "Ř_Tile__ů"
    },
    
    MD_ScopeDescription: {
    	attributes: "Ř_Attributes____ů",
    	features: "Ř_Features___ů",
    	featureInstances: "Ř_Feature Instances______ů",
    	attributeInstances: "Ř_Attribute Instances_______ů",
    	dataset: "Ř_Dataset___ů",
    	other: "Ř_Other___ů"
    },
    
    MD_SecurityConstraints: {
    	caption: "Ř_Security Constraints_______ů",
    	classification: "Ř_Classification_____ů",
    	userNote: "Ř_User Note____ů",
    	classificationSystem: "Ř_Classification System_______ů",
    	handlingDescription: "Ř_Handling Description_______ů"
    },
    
    MD_SpatialRepresentationTypeCode: {
    	caption: "Ř_Spatial Representation Type_________ů",
    	vector: "Ř_Vector___ů",
    	grid: "Ř_Grid__ů",
    	textTable: "Ř_Text Table____ů",
    	tin: "Ř_TIN__ů",
    	stereoModel: "Ř_Stereo Model_____ů",
    	video: "Ř_Video___ů"
    },
    
    MD_TopicCategoryCode: {
    	caption: "Ř_Topic Category_____ů",
    	boundaries: "Ř_Administrative and Political Boundaries_____________ů",
    	farming: "Ř_Agriculture and Farming________ů",
    	climatologyMeteorologyAtmosphere: "Ř_Atmosphere and Climatic________ů",
    	biota: "Ř_Biology and Ecology_______ů",
    	economy: "Ř_Business and Economic_______ů",
    	planningCadastre: "Ř_Cadastral____ů",
    	society: "Ř_Cultural, Society and Demography___________ů",
    	elevation: "Ř_Elevation and Derived Products__________ů",
    	environment: "Ř_Environment and Conservation_________ů",
    	structure: "Ř_Facilities and Structures_________ů",
    	geoscientificInformation: "Ř_Geological and Geophysical_________ů",
    	health: "Ř_Human Health and Disease________ů",
    	imageryBaseMapsEarthCover: "Ř_Imagery and Base Maps_______ů",
    	inlandWaters: "Ř_Inland Water Resources________ů",
    	location: "Ř_Locations and Geodetic Networks__________ů",
    	intelligenceMilitary: "Ř_Military___ů",
    	oceans: "Ř_Oceans and Estuaries_______ů",
    	transportation: "Ř_Transportation Networks________ů",
    	utilitiesCommunication: "Ř_Utilities and Communication_________ů"
    },
    
    MI_ContextCode: {
    	caption: "Ř_Context___ů",
    	acquisition: "Ř_Acquisition____ů",
    	pass: "Ř_Pass__ů",
    	wayPoint: "Ř_Waypoint___ů"
    },
    
    MI_EnvironmentalRecord: {
    	caption: "Ř_Environmental Conditions________ů",
    	averageAirTemperature: "Ř_Average Air Temperature________ů",
    	maxRelativeHumidity: "Ř_Maximum Relative Humidity_________ů",
    	maxAltitude: "Ř_Maximum Altitude______ů",
    	meterologicalConditions: "Ř_Meterological Conditions________ů"
    },
    
    MI_Event: {
    	identifier: "Ř_Event Identifier______ů",
    	time: "Ř_Time__ů",
    	expectedObjectiveReference: "Ř_Expected Objective (Objective Identifer)_____________ů",
    	relatedSensorReference: "Ř_Related Sensor (Instrument Identifer)____________ů",
    	relatedPassReference: "Ř_Related Pass (Platform Pass Identifer)____________ů"
    },

    MI_GeometryTypeCode: {
    	point: "Ř_Point___ů",
    	linear: "Ř_Linear___ů",
    	areal: "Ř_Areal___ů",
    	strip: "Ř_Strip___ů"
    },
    
    MI_Instrument: {
    	citation: "Ř_Instrument Citation_______ů",
    	identifier: "Ř_Instrument Identifier_______ů",
    	sType: "Ř_Instrument Type______ů",
    	description: "Ř_Instrument Description________ů",
    	mountedOn: "Ř_Mounted On____ů",
    	mountedOnPlatformReference: "Ř_Mounted On (Platform Identifier)___________ů"
    },
    
    MI_Metadata: {
    	acquisitionInformation: "Ř_Acquisition____ů"
    },
    
    MI_Objective: {
    	caption: "Ř_Objective____ů",
    	identifier: "Ř_Objective Identifier_______ů",
    	priority: "Ř_Priority of Target______ů",
    	sFunction: "Ř_Function of Objective_______ů",
    	extent: "Ř_Extent___ů",
    	pass: "Ř_Platform Pass_____ů",
    	sensingInstrumentReference: "Ř_Sensing Instrument (Instrument Identifier)______________ů",
    	objectiveOccurrence: "Ř_Events___ů",
    	sections: {
    		identification: "Ř_Identification_____ů",
    		extent: "Ř_Extent___ů",
    		pass: "Ř_Pass__ů",
    		sensingInstrument: "Ř_Sensing Instrument______ů",
    		objectiveOccurrence: "Ř_Events___ů"
    	}
    },
    
    MI_ObjectiveTypeCode: {
    	caption: "Ř_Type (Collection Technique for Objective)_____________ů",
    	instantaneousCollection: "Ř_Instantaneous Collection________ů",
    	persistentView: "Ř_Persistent View______ů",
    	survey: "Ř_Survey___ů"
    },
    
    MI_Operation: {
    	caption: "Ř_Operation____ů",
    	description: "Ř_Operation Description_______ů",
    	citation: "Ř_Operation Citation______ů",
    	identifier: "Ř_Operation Identifier_______ů",
    	status: "Ř_Operation Status______ů",
    	objectiveReference: "Ř_Related Objective (Objective Identifier)_____________ů",
    	planReference: "Ř_Related Plan (Plan Identifier)__________ů",
    	significantEventReference: "Ř_Related Event (Event Identifier)___________ů",
    	platformReference: "Ř_Related Platform (Platform Identifier)____________ů",
    	sections: {
    		identification: "Ř_Identification_____ů",
    		related: "Ř_Related___ů"
    	}
    },
    
    MI_OperationTypeCode: {
    	caption: "Ř_Operation Type_____ů",
    	real: "Ř_Real__ů",
    	simulated: "Ř_Simulated____ů",
    	synthesized: "Ř_Synthesized____ů"
    },
    
    MI_Plan: {
    	sType: "Ř_Sampling Geometry for Collecting Data____________ů",
    	status: "Ř_Status of Plan_____ů",
    	citation: "Ř_Citation of Authority Requesting Collection______________ů",
    	satisfiedRequirementReference: "Ř_Satisfied Requirement (Requirement Identifier)_______________ů",
    	operationReference: "Ř_Related Operation (Operation Identifier)_____________ů"
    },
    
    MI_Platform: {
    	citation: "Ř_Platform Citation______ů",
    	identifier: "Ř_Platform Identifier_______ů",
    	description: "Ř_Description of Platform Supporting the Instrument________________ů",
    	sponsor: "Ř_Sponsor Organization for Platform___________ů",
    	instrument: "Ř_Instrument(s) mounted on the platform____________ů",
    	instrumentReference: "Ř_Instrument Identifier_______ů",
    	sections: {
    		identification: "Ř_Identification_____ů",
    		sponsor: "Ř_Sponsor___ů",
    		instruments: "Ř_Instruments____ů"
    	}
    },
    
    MI_PlatformPass: {
    	identifier: "Ř_Platform Pass Identifier________ů",
    	extent: "Ř_Platform Pass Extent_______ů",
    	relatedEventReference: "Ř_Related Event (Event Identifer)__________ů"
    },

    MI_PriorityCode: {
    	critical: "Ř_Critical___ů", 
    	highImportance: "Ř_High Importance______ů",
    	mediumImportance: "Ř_Medium Importance______ů",
    	lowImportance: "Ř_Low Importance_____ů"
    },
    
    MI_RequestedDate : {
    	requestedDateOfCollection: "Ř_Requested Date Of Collection_________ů",
    	latestAcceptableDate: "Ř_Latest Acceptable Date________ů"
    },
    
    MI_Requirement: {
    	caption: "Ř_Requirement____ů",
    	citation: "Ř_Citation for Requirement Guidance Material______________ů",
    	identifier: "Ř_Requirement Identifier________ů",
    	requestor: "Ř_Requestor of Requirement________ů",
    	recipient: "Ř_Recipient of Requirement Results___________ů",
    	priority: "Ř_Requirement Priority_______ů",
    	requestedDate: "Ř_Requested Date_____ů",
    	expiryDate: "Ř_Expiry Date____ů",
    	satisifiedPlanReference: "Ř_Satisfied Plan (Plan Identifier)___________ů",
    	sections: {
    		identification: "Ř_Identification_____ů",
    		requestor: "Ř_Requestor____ů",
    		recipient: "Ř_Recipient____ů",
    		priorityAndDates: "Ř_Priority And Dates______ů",
    		satisifiedPlan: "Ř_Satisified  Plan______ů"
    	}
    },
    
    MI_SequenceCode: {
    	caption: "Ř_Sequence___ů",
    	start: "Ř_Start___ů",
    	end: "Ř_End__ů",
    	instantaneous: "Ř_Instantaneous_____ů"
    },
    
    MI_TriggerCode: {
    	caption: "Ř_Trigger___ů",
    	automatic: "Ř_Automatic____ů",
    	manual: "Ř_Manual___ů",
    	preProgrammed: "Ř_Preprogrammed_____ů"
    },
    
    ObjectReference: {
    	uuidref: "Ř_UUID Reference_____ů",
    	xlinkref: "Ř_URL Reference_____ů"
    },
    
    RS_Identifier: {
    	caption: "Ř_ID Plus Code Space______ů",
    	code: "Ř_Code__ů",
    	codeSpace: "Ř_Code Space____ů"
    },
    
    SV_CouplingType: {
    	loose: "Ř_Loose___ů",
    	mixed: "Ř_Mixed___ů",
    	tight: "Ř_Tight___ů"
    },
    
    SV_OperationMetadata: {
    	operationName: "Ř_Operation Name_____ů",
    	DCP: "Ř_DCP__ů",
    	connectPoint: "Ř_Connect Point_____ů"
    },
    
    SV_ServiceIdentification: {
    	serviceType: "Ř_ServiceType____ů",
    	couplingType: "Ř_Coupling Type_____ů",
    	containsOperations: "Ř_Operation Metadata______ů",
    	operatesOn: "Ř_Operates On____ů"
    },
    
    TM_Primitive: {
    	indeterminatePosition: "Ř_Indeterminate Position________ů",
    	indeterminates: {
    		before: "Ř_Before___ů",
       	after: "Ř_After___ů",
      	now: "Ř_Now__ů",
      	unknown: "Ř_Unknown___ů"
    	}
    },
    
    gemet: {
    	concept: {
    		gemetConceptKeyword: "Ř_GEMET Concept Keyword_______ů",
    		tool: "Ř_Look Up____ů...",
    		dialogTitle: "Ř_GEMET - Concept Keyword________ů",
    		searchLabel: "Ř_Search___ů:",
    		searchTip: "Ř_Search GEMET_____ů"
    	},
    	theme: {
    		tool: "Ř_Look Up____ů...",
    		dialogTitle: "Ř_GEMET - Inspire Data Theme_________ů"
    	},
    	ioerror: "Ř_There was an error communicating with the GEMET service: {url}____________________ů",
    	searching: "Ř_Searching GEMET______ů...",
    	noMatch: "Ř_No matching results were found__________ů.",
      languages: {
      	"bg": "Ř_Bulgarian____ů",
      	"cs": "Ř_Czech___ů",
      	"da": "Ř_Danish___ů",
      	"nl": "Ř_Dutch___ů",
      	"en": "Ř_English___ů",
      	"et": "Ř_Estonian___ů",
      	"fi": "Ř_Finnish___ů",
      	"fr": "Ř_French___ů",
      	"de": "Ř_German___ů",
      	"el": "Ř_Greek___ů",
      	"hu": "Ř_Hungarian____ů",
      	"ga": "Ř_Gaelic (Irish)_____ů",
      	"it": "Ř_Italian___ů",
      	"lv": "Ř_Latvian___ů",
      	"lt": "Ř_Lithuanian____ů",
      	"mt": "Ř_Maltese___ů",
      	"pl": "Ř_Polish___ů", 
      	"pt": "Ř_Portuguese____ů",
      	"ro": "Ř_Romanian___ů",
      	"sk": "Ř_Slovak___ů",
      	"sl": "Ř_Slovenian____ů",  	
      	"es": "Ř_Spanish___ů",
      	"sv": "Ř_Swedish___ů"
      }
    }
   
  })
);
