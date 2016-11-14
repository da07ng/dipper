define(
   ({
  	
    documentTypes: {
    	data: {
    		caption: "Ж_ISO 19115 (Data)______Я",
    		description: ""
    	},
    	service: {
    		caption: "Ж_ISO 19119 (Service)_______Я",
    		description: ""
    	},
    	gmi: {
    		caption: "Ж_ISO 19115-2 (Imagery and Gridded Data)____________Я",
    		description: ""
    	}
    },
    
    general: {
    	reference: "Ж_Reference____Я"
    },
    
    sections: {
    	metadata: "Ж_Metadata___Я",
    	identification: "Ж_Identification_____Я",
    	distribution: "Ж_Distribution_____Я",
    	quality: "Ж_Quality___Я",
    	acquisition: "Ж_Acquisition____Я"
    },
    
    metadataSection: {
    	identifier: "Ж_Identifier____Я",
    	contact: "Ж_Contact___Я",
    	date: "Ж_Date__Я",
    	standard: "Ж_Standard___Я",
    	reference: "Ж_Reference____Я"
    },
    
    identificationSection: {
    	citation: "Ж_Citation___Я",
    	description: "Ж_Description____Я",
    	contact: "Ж_Contact___Я",
    	thumbnail: "Ж_Thumbnail____Я",
    	keywords: "Ж_Keywords___Я",
    	constraints: "Ж_Constraints____Я",
    	resource: "Ж_Resource___Я",
    	resourceTab: {
    		representation: "Ж_Representation_____Я",
    		language: "Ж_Language___Я",
    		classification: "Ж_Classification_____Я",
    		extent: "Ж_Extent___Я"
    	},
    	serviceResourceTab: {
    		serviceType: "Ж_Service Type_____Я",
    		extent: "Ж_Extent___Я",
    		couplingType: "Ж_Coupling Type_____Я",
    		operation: "Ж_Operation____Я",
    		operatesOn: "Ж_Operates On____Я"
    	}
    },
    
    distributionSection: {
    },
    
    qualitySection: {
    	scope: "Ж_Scope___Я",
    	conformance: "Ж_Conformance____Я",
    	lineage: "Ж_Lineage___Я"
    },
    
    acquisitionSection: {
    	requirement: "Ж_Requirement____Я",
    	objective: "Ж_Objective____Я",
    	instrument: "Ж_Instrument____Я",
    	plan: "Ж_Plan__Я",
    	operation: "Ж_Operation____Я",
    	platform: "Ж_Platform___Я",
    	environment: "Ж_Environment____Я"
    },
    
    AbstractMD_Identification: {
    	sAbstract: "Ж_Abstract___Я",
    	purpose: "Ж_Purpose___Я",
    	credit: "Ж_Credits___Я",
    	pointOfContact: "Ж_Point of Contact______Я",
    	resourceMaintenance: "Ж_Maintenance____Я",
    	graphicOverview: "Ж_Graphic Overview______Я",
    	descriptiveKeywords: "Ж_Keyword Collection______Я",
    	resourceConstraints: "Ж_Constraints____Я"
    },
    
    CI_Address: {
    	deliveryPoint: "Ж_Delivery Point_____Я",
    	city: "Ж_City__Я",
    	administrativeArea: "Ж_Administrative Area_______Я",
    	postalCode: "Ж_Postal Code____Я",
    	country: "Ж_Country___Я",
    	electronicMailAddress: "Ж_E-Mail Address_____Я"
    },
    
    CI_Citation: {
    	title: "Ж_Title___Я",
    	alternateTitle: "Ж_Alternate Title______Я",
    	identifier: "Ж_Unique Resource Identifier_________Я",
    	resource: {
    		title: "Ж_Resource Title_____Я",
    		date: "Ж_Resource Date_____Я"
    	},
    	specification: {
    		title: "Ж_Specification Title_______Я",
    		date: "Ж_Specification Date______Я"
    	}
    },
    
    CI_Contact: {
    	phone: "Ж_Phone___Я",
    	address: "Ж_Address___Я",
    	onlineResource: "Ж_Online Resource______Я",
    	hoursOfService: "Ж_Hours of Service______Я",
    	contactInstructions: "Ж_Contact Instructions_______Я"
    },
    
    CI_Date: {
    	date: "Ж_Date__Я",
    	dateType: "Ж_Date Type____Я"
    },
    
  	CI_DateTypeCode: {
  		caption: "Ж_Date Type____Я",
  		creation: "Ж_Creation Date_____Я",
  		publication: "Ж_Publication Date______Я",
  		revision: "Ж_Revision Date_____Я"
  	},
  	
    CI_OnLineFunctionCode: {
    	caption: "Ж_Function___Я",
    	download: "Ж_Download___Я",
    	information: "Ж_Information____Я",
    	offlineAccess: "Ж_Offline Access_____Я",
    	order: "Ж_Order___Я",
    	search: "Ж_Search___Я"
    },
    
    CI_OnlineResource: {
    	caption: "Ж_Online Resource______Я",
    	linkage: "Ж_URL__Я",
    	protocol: "Ж_Protocol___Я",
    	applicationProfile: "Ж_Application Profile_______Я",
    	name: "Ж_Name__Я",
    	description: "Ж_Description____Я",
    	sFunction: "Ж_Function___Я"
    },
    
    CI_ResponsibleParty: {
    	caption: "Ж_Point of Contact______Я",
    	individualName: "Ж_Individual Name______Я",
    	organisationName: "Ж_Organisation Name______Я",
    	positionName: "Ж_Position Name_____Я",
    	contactInfo: "Ж_Contact Info_____Я",
    	role: "Ж_Role__Я"
    },
    
    CI_RoleCode: {
    	caption: "Ж_Role__Я",
    	resourceProvider: "Ж_Resource Provider______Я",
    	custodian: "Ж_Custodian____Я",
    	owner: "Ж_Owner___Я",
    	user: "Ж_User__Я",
    	distributor: "Ж_Distributor____Я",
    	originator: "Ж_Originator____Я",
    	pointOfContact: "Ж_Point of Contact______Я",
    	principalInvestigator: "Ж_Principal Investigator________Я",
    	processor: "Ж_Processor____Я",
    	publisher: "Ж_Publisher____Я",
    	author: "Ж_Author___Я"
    },
    
    CI_Telephone: {
    	voice: "Ж_Voice___Я",
    	facsimile: "Ж_Fax__Я"
    },
    
    DCPList: {
    	caption: "Ж_DCP__Я",
    	XML: "Ж_XML__Я",
    	CORBA: "Ж_CORBA___Я",
    	JAVA: "Ж_JAVA__Я",
    	COM: "Ж_COM__Я",
    	SQL: "Ж_SQL__Я",
    	WebServices: "Ж_WebServices____Я"
    },
    
    DQ_ConformanceResult: {
    	caption: "Ж_Conformance Result______Я",
    	explanation: "Ж_Explanation____Я",
    	degree: {
    		caption: "Ж_Degree___Я",
    		validationPerformed: "Ж_Validation Performed_______Я",
    		conformant: "Ж_Conformant____Я",
    		nonConformant: "Ж_Non Conformant_____Я"
    	}
    },
    
    DQ_DataQuality: {
    	report: "Ж_Report___Я"
    },
    
    DQ_Scope : {
    	level: "Ж_Scope (quality information applies to)____________Я",
    	levelDescription: "Ж_Level Description______Я"
    },
    
    EX_Extent: {
    	caption: "Ж_Extent___Я",
    	description: "Ж_Description____Я",
    	geographicElement: "Ж_Spatial Extent_____Я",
    	temporalElement: "Ж_Temporal Extent______Я",
    	verticalElement: "Ж_Vertical Extent______Я"
    },
    
    EX_GeographicBoundingBox: {
    	westBoundLongitude: "Ж_West Bounding Longitude________Я",
    	eastBoundLongitude: "Ж_East Bounding Longitude________Я",
    	southBoundLatitude: "Ж_South Bounding Latitude________Я",
    	northBoundLatitude: "Ж_North Bounding Latitude________Я"
    },
    
    EX_GeographicDescription: {
    	caption: "Ж_Geographic Description________Я"
    },
    
    EX_TemporalExtent: {
    	TimePeriod: {
    		beginPosition: "Ж_Begin Date____Я",
    		endPosition: "Ж_End Date___Я"
    	}
    },
    
    EX_VerticalExtent: {
    	minimumValue: "Ж_Minimum Value_____Я",
    	maximumValue: "Ж_Maximum Value_____Я",
    	verticalCRS: "Ж_Vertical CRS_____Я"
    },
    
    Length: {
    	caption: "Ж_Length___Я",
    	uom: "Ж_Units of Measure______Я",
    	km: "Ж_Kilometers____Я",
    	m: "Ж_Meters___Я",
    	mi: "Ж_Miles___Я",
    	ft: "Ж_Feet__Я"
    },
    
    LI_Lineage: {
    	statement: "Ж_Lineage Statement______Я"
    },
    
    MD_BrowseGraphic: {
    	fileName: "Ж_Browse Graphic URL______Я",
    	fileDescription: "Ж_Browse Graphic Caption________Я",
    	fileType: "Ж_Browse Graphic Type_______Я"
    },
    
    MD_ClassificationCode: {
    	unclassified: "Ж_Unclassified_____Я",
    	restricted: "Ж_Restricted____Я",
    	confidential: "Ж_Confidential_____Я",
    	secret: "Ж_Secret___Я",
    	topSecret: "Ж_Top Secret____Я"
    },
    
    MD_Constraints: {
    	caption: "Ж_Usage Constraints______Я",
    	useLimitation: "Ж_Use Limitation_____Я"
    },
    
    MD_DataIdentification: {
    	spatialRepresentationType: "Ж_Spatial Representation Type_________Я",
    	spatialResolution: "Ж_Spatial Resolution______Я",
    	language: "Ж_Resource Language______Я",
    	supplementalInformation: "Ж_Supplemental_____Я"
    },
    
    MD_DigitalTransferOptions: {
    	onLine: "Ж_Online___Я"
    },
    
    MD_Distribution: {
    	distributionFormat: "Ж_Distribution Format_______Я",
    	transferOptions: "Ж_Transfer Options______Я"
    },
    
    MD_Format: {
    	name: "Ж_Format Name____Я",
    	version: "Ж_Format Version_____Я"
    },
    
    MD_Identifier: {
    	caption: "Ж_URI__Я",
    	identifierCaption: "Ж_Identifier____Я",
    	code: "Ж_Code__Я"
    },
    
    MD_Keywords: {
    	delimitedCaption: "Ж_Keywords___Я",
    	thesaurusName: "Ж_Associated Thesaurus_______Я"
    },
    
    MD_KeywordTypeCode: {
    	caption: "Ж_Keyword Type_____Я",
    	discipline: "Ж_Discipline____Я",
    	place: "Ж_Place___Я",
    	stratum: "Ж_Stratum___Я",
    	temporal: "Ж_Temporal___Я",
    	theme: "Ж_Theme___Я"
    },
    
    MD_LegalConstraints: {
    	caption: "Ж_Legal Constraints______Я",
    	accessConstraints: "Ж_Access Constraints______Я",
    	useConstraints: "Ж_Use Constraints______Я",
    	otherConstraints: "Ж_Other Constraints______Я"
    },
    
    MD_MaintenanceFrequencyCode: {
    	caption: "Ж_Frequency____Я",
    	continual: "Ж_Continual____Я",
    	daily: "Ж_Daily___Я",
    	weekly: "Ж_Weekly___Я",
    	fortnightly: "Ж_Fortnightly____Я",
    	monthly: "Ж_Monthly___Я",
    	quarterly: "Ж_Quarterly____Я",
    	biannually: "Ж_Biannually____Я",
    	annually: "Ж_Annually___Я",
    	asNeeded: "Ж_As Needed____Я",
    	irregular: "Ж_Irregular____Я",
    	notPlanned: "Ж_Not Planned____Я",
    	unknown: "Ж_Unknown___Я"
    },
    
    MD_Metadata: {
    	caption: "Ж_Metadata___Я",
    	fileIdentifier: "Ж_File Identifier______Я",
    	language: "Ж_Metadata Language______Я",
    	hierarchyLevel: "Ж_Hierarchy Level______Я",
    	hierarchyLevelName: "Ж_Hierarchy Level Name_______Я",
    	contact: "Ж_Metadata Contact______Я",
    	dateStamp: "Ж_Metadata Date_____Я",
    	metadataStandardName: "Ж_Metadata Standard Name________Я",
    	metadataStandardVersion: "Ж_Metadata Standard Version_________Я",
    	referenceSystemInfo: "Ж_Reference System______Я",
    	identificationInfo: "Ж_Identification_____Я",
    	distributionInfo: "Ж_Distribution_____Я",
    	dataQualityInfo: "Ж_Quality___Я"
    },
    
    MD_ProgressCode: {
    	caption: "Ж_Progress Code_____Я",
    	completed: "Ж_Completed____Я",
    	historicalArchive: "Ж_Historical Archive______Я",
    	obsolete: "Ж_Obsolete___Я",
    	onGoing: "Ж_On Going___Я",
    	planned: "Ж_Planned___Я",
    	required: "Ж_Required___Я",
    	underDevelopment: "Ж_Under Development______Я"
    },
    
    MD_RepresentativeFraction: {
    	denominator: "Ж_Denominator____Я"
    },
    
    MD_Resolution: {
    	equivalentScale: "Ж_Equivalent Scale______Я",
    	distance: "Ж_Distance___Я"
    },
    
    MD_RestrictionCode: {
    	copyright: "Ж_Copyright____Я",
    	patent: "Ж_Patent___Я",
    	patentPending: "Ж_Patent Pending_____Я",
    	trademark: "Ж_Trademark____Я",
    	license: "Ж_License___Я",
    	intellectualPropertyRights: "Ж_Intellectual Property Rights_________Я",
    	restricted: "Ж_Restricted____Я",
    	otherRestrictions: "Ж_Other Restrictions______Я"
    },
    
    MD_ScopeCode: {
    	attribute: "Ж_Attribute____Я",
    	attributeType: "Ж_Attribute type_____Я",
    	collectionHardware: "Ж_Collection hardware_______Я",
    	collectionSession: "Ж_Collection session______Я",
    	dataset: "Ж_Dataset___Я",
    	series: "Ж_Series___Я",
    	nonGeographicDataset: "Ж_Non geographic dataset________Я",
    	dimensionGroup: "Ж_Dimension group______Я",
    	feature: "Ж_Feature___Я",
    	featureType: "Ж_Feature type_____Я",
    	propertyType: "Ж_Property type_____Я",
    	fieldSession: "Ж_Field session_____Я",
    	software: "Ж_Software___Я",
    	service: "Ж_Service___Я",
    	model: "Ж_Model___Я",
    	tile: "Ж_Tile__Я"
    },
    
    MD_ScopeDescription: {
    	attributes: "Ж_Attributes____Я",
    	features: "Ж_Features___Я",
    	featureInstances: "Ж_Feature Instances______Я",
    	attributeInstances: "Ж_Attribute Instances_______Я",
    	dataset: "Ж_Dataset___Я",
    	other: "Ж_Other___Я"
    },
    
    MD_SecurityConstraints: {
    	caption: "Ж_Security Constraints_______Я",
    	classification: "Ж_Classification_____Я",
    	userNote: "Ж_User Note____Я",
    	classificationSystem: "Ж_Classification System_______Я",
    	handlingDescription: "Ж_Handling Description_______Я"
    },
    
    MD_SpatialRepresentationTypeCode: {
    	caption: "Ж_Spatial Representation Type_________Я",
    	vector: "Ж_Vector___Я",
    	grid: "Ж_Grid__Я",
    	textTable: "Ж_Text Table____Я",
    	tin: "Ж_TIN__Я",
    	stereoModel: "Ж_Stereo Model_____Я",
    	video: "Ж_Video___Я"
    },
    
    MD_TopicCategoryCode: {
    	caption: "Ж_Topic Category_____Я",
    	boundaries: "Ж_Administrative and Political Boundaries_____________Я",
    	farming: "Ж_Agriculture and Farming________Я",
    	climatologyMeteorologyAtmosphere: "Ж_Atmosphere and Climatic________Я",
    	biota: "Ж_Biology and Ecology_______Я",
    	economy: "Ж_Business and Economic_______Я",
    	planningCadastre: "Ж_Cadastral____Я",
    	society: "Ж_Cultural, Society and Demography___________Я",
    	elevation: "Ж_Elevation and Derived Products__________Я",
    	environment: "Ж_Environment and Conservation_________Я",
    	structure: "Ж_Facilities and Structures_________Я",
    	geoscientificInformation: "Ж_Geological and Geophysical_________Я",
    	health: "Ж_Human Health and Disease________Я",
    	imageryBaseMapsEarthCover: "Ж_Imagery and Base Maps_______Я",
    	inlandWaters: "Ж_Inland Water Resources________Я",
    	location: "Ж_Locations and Geodetic Networks__________Я",
    	intelligenceMilitary: "Ж_Military___Я",
    	oceans: "Ж_Oceans and Estuaries_______Я",
    	transportation: "Ж_Transportation Networks________Я",
    	utilitiesCommunication: "Ж_Utilities and Communication_________Я"
    },
    
    MI_ContextCode: {
    	caption: "Ж_Context___Я",
    	acquisition: "Ж_Acquisition____Я",
    	pass: "Ж_Pass__Я",
    	wayPoint: "Ж_Waypoint___Я"
    },
    
    MI_EnvironmentalRecord: {
    	caption: "Ж_Environmental Conditions________Я",
    	averageAirTemperature: "Ж_Average Air Temperature________Я",
    	maxRelativeHumidity: "Ж_Maximum Relative Humidity_________Я",
    	maxAltitude: "Ж_Maximum Altitude______Я",
    	meterologicalConditions: "Ж_Meterological Conditions________Я"
    },
    
    MI_Event: {
    	identifier: "Ж_Event Identifier______Я",
    	time: "Ж_Time__Я",
    	expectedObjectiveReference: "Ж_Expected Objective (Objective Identifer)_____________Я",
    	relatedSensorReference: "Ж_Related Sensor (Instrument Identifer)____________Я",
    	relatedPassReference: "Ж_Related Pass (Platform Pass Identifer)____________Я"
    },

    MI_GeometryTypeCode: {
    	point: "Ж_Point___Я",
    	linear: "Ж_Linear___Я",
    	areal: "Ж_Areal___Я",
    	strip: "Ж_Strip___Я"
    },
    
    MI_Instrument: {
    	citation: "Ж_Instrument Citation_______Я",
    	identifier: "Ж_Instrument Identifier_______Я",
    	sType: "Ж_Instrument Type______Я",
    	description: "Ж_Instrument Description________Я",
    	mountedOn: "Ж_Mounted On____Я",
    	mountedOnPlatformReference: "Ж_Mounted On (Platform Identifier)___________Я"
    },
    
    MI_Metadata: {
    	acquisitionInformation: "Ж_Acquisition____Я"
    },
    
    MI_Objective: {
    	caption: "Ж_Objective____Я",
    	identifier: "Ж_Objective Identifier_______Я",
    	priority: "Ж_Priority of Target______Я",
    	sFunction: "Ж_Function of Objective_______Я",
    	extent: "Ж_Extent___Я",
    	pass: "Ж_Platform Pass_____Я",
    	sensingInstrumentReference: "Ж_Sensing Instrument (Instrument Identifier)______________Я",
    	objectiveOccurrence: "Ж_Events___Я",
    	sections: {
    		identification: "Ж_Identification_____Я",
    		extent: "Ж_Extent___Я",
    		pass: "Ж_Pass__Я",
    		sensingInstrument: "Ж_Sensing Instrument______Я",
    		objectiveOccurrence: "Ж_Events___Я"
    	}
    },
    
    MI_ObjectiveTypeCode: {
    	caption: "Ж_Type (Collection Technique for Objective)_____________Я",
    	instantaneousCollection: "Ж_Instantaneous Collection________Я",
    	persistentView: "Ж_Persistent View______Я",
    	survey: "Ж_Survey___Я"
    },
    
    MI_Operation: {
    	caption: "Ж_Operation____Я",
    	description: "Ж_Operation Description_______Я",
    	citation: "Ж_Operation Citation______Я",
    	identifier: "Ж_Operation Identifier_______Я",
    	status: "Ж_Operation Status______Я",
    	objectiveReference: "Ж_Related Objective (Objective Identifier)_____________Я",
    	planReference: "Ж_Related Plan (Plan Identifier)__________Я",
    	significantEventReference: "Ж_Related Event (Event Identifier)___________Я",
    	platformReference: "Ж_Related Platform (Platform Identifier)____________Я",
    	sections: {
    		identification: "Ж_Identification_____Я",
    		related: "Ж_Related___Я"
    	}
    },
    
    MI_OperationTypeCode: {
    	caption: "Ж_Operation Type_____Я",
    	real: "Ж_Real__Я",
    	simulated: "Ж_Simulated____Я",
    	synthesized: "Ж_Synthesized____Я"
    },
    
    MI_Plan: {
    	sType: "Ж_Sampling Geometry for Collecting Data____________Я",
    	status: "Ж_Status of Plan_____Я",
    	citation: "Ж_Citation of Authority Requesting Collection______________Я",
    	satisfiedRequirementReference: "Ж_Satisfied Requirement (Requirement Identifier)_______________Я",
    	operationReference: "Ж_Related Operation (Operation Identifier)_____________Я"
    },
    
    MI_Platform: {
    	citation: "Ж_Platform Citation______Я",
    	identifier: "Ж_Platform Identifier_______Я",
    	description: "Ж_Description of Platform Supporting the Instrument________________Я",
    	sponsor: "Ж_Sponsor Organization for Platform___________Я",
    	instrument: "Ж_Instrument(s) mounted on the platform____________Я",
    	instrumentReference: "Ж_Instrument Identifier_______Я",
    	sections: {
    		identification: "Ж_Identification_____Я",
    		sponsor: "Ж_Sponsor___Я",
    		instruments: "Ж_Instruments____Я"
    	}
    },
    
    MI_PlatformPass: {
    	identifier: "Ж_Platform Pass Identifier________Я",
    	extent: "Ж_Platform Pass Extent_______Я",
    	relatedEventReference: "Ж_Related Event (Event Identifer)__________Я"
    },

    MI_PriorityCode: {
    	critical: "Ж_Critical___Я", 
    	highImportance: "Ж_High Importance______Я",
    	mediumImportance: "Ж_Medium Importance______Я",
    	lowImportance: "Ж_Low Importance_____Я"
    },
    
    MI_RequestedDate : {
    	requestedDateOfCollection: "Ж_Requested Date Of Collection_________Я",
    	latestAcceptableDate: "Ж_Latest Acceptable Date________Я"
    },
    
    MI_Requirement: {
    	caption: "Ж_Requirement____Я",
    	citation: "Ж_Citation for Requirement Guidance Material______________Я",
    	identifier: "Ж_Requirement Identifier________Я",
    	requestor: "Ж_Requestor of Requirement________Я",
    	recipient: "Ж_Recipient of Requirement Results___________Я",
    	priority: "Ж_Requirement Priority_______Я",
    	requestedDate: "Ж_Requested Date_____Я",
    	expiryDate: "Ж_Expiry Date____Я",
    	satisifiedPlanReference: "Ж_Satisfied Plan (Plan Identifier)___________Я",
    	sections: {
    		identification: "Ж_Identification_____Я",
    		requestor: "Ж_Requestor____Я",
    		recipient: "Ж_Recipient____Я",
    		priorityAndDates: "Ж_Priority And Dates______Я",
    		satisifiedPlan: "Ж_Satisified  Plan______Я"
    	}
    },
    
    MI_SequenceCode: {
    	caption: "Ж_Sequence___Я",
    	start: "Ж_Start___Я",
    	end: "Ж_End__Я",
    	instantaneous: "Ж_Instantaneous_____Я"
    },
    
    MI_TriggerCode: {
    	caption: "Ж_Trigger___Я",
    	automatic: "Ж_Automatic____Я",
    	manual: "Ж_Manual___Я",
    	preProgrammed: "Ж_Preprogrammed_____Я"
    },
    
    ObjectReference: {
    	uuidref: "Ж_UUID Reference_____Я",
    	xlinkref: "Ж_URL Reference_____Я"
    },
    
    RS_Identifier: {
    	caption: "Ж_ID Plus Code Space______Я",
    	code: "Ж_Code__Я",
    	codeSpace: "Ж_Code Space____Я"
    },
    
    SV_CouplingType: {
    	loose: "Ж_Loose___Я",
    	mixed: "Ж_Mixed___Я",
    	tight: "Ж_Tight___Я"
    },
    
    SV_OperationMetadata: {
    	operationName: "Ж_Operation Name_____Я",
    	DCP: "Ж_DCP__Я",
    	connectPoint: "Ж_Connect Point_____Я"
    },
    
    SV_ServiceIdentification: {
    	serviceType: "Ж_ServiceType____Я",
    	couplingType: "Ж_Coupling Type_____Я",
    	containsOperations: "Ж_Operation Metadata______Я",
    	operatesOn: "Ж_Operates On____Я"
    },
    
    TM_Primitive: {
    	indeterminatePosition: "Ж_Indeterminate Position________Я",
    	indeterminates: {
    		before: "Ж_Before___Я",
       	after: "Ж_After___Я",
      	now: "Ж_Now__Я",
      	unknown: "Ж_Unknown___Я"
    	}
    },
    
    gemet: {
    	concept: {
    		gemetConceptKeyword: "Ж_GEMET Concept Keyword_______Я",
    		tool: "Ж_Look Up____Я...",
    		dialogTitle: "Ж_GEMET - Concept Keyword________Я",
    		searchLabel: "Ж_Search___Я:",
    		searchTip: "Ж_Search GEMET_____Я"
    	},
    	theme: {
    		tool: "Ж_Look Up____Я...",
    		dialogTitle: "Ж_GEMET - Inspire Data Theme_________Я"
    	},
    	ioerror: "Ж_There was an error communicating with the GEMET service: {url}____________________Я",
    	searching: "Ж_Searching GEMET______Я...",
    	noMatch: "Ж_No matching results were found__________Я.",
      languages: {
      	"bg": "Ж_Bulgarian____Я",
      	"cs": "Ж_Czech___Я",
      	"da": "Ж_Danish___Я",
      	"nl": "Ж_Dutch___Я",
      	"en": "Ж_English___Я",
      	"et": "Ж_Estonian___Я",
      	"fi": "Ж_Finnish___Я",
      	"fr": "Ж_French___Я",
      	"de": "Ж_German___Я",
      	"el": "Ж_Greek___Я",
      	"hu": "Ж_Hungarian____Я",
      	"ga": "Ж_Gaelic (Irish)_____Я",
      	"it": "Ж_Italian___Я",
      	"lv": "Ж_Latvian___Я",
      	"lt": "Ж_Lithuanian____Я",
      	"mt": "Ж_Maltese___Я",
      	"pl": "Ж_Polish___Я", 
      	"pt": "Ж_Portuguese____Я",
      	"ro": "Ж_Romanian___Я",
      	"sk": "Ж_Slovak___Я",
      	"sl": "Ж_Slovenian____Я",  	
      	"es": "Ж_Spanish___Я",
      	"sv": "Ж_Swedish___Я"
      }
    }
   
  })
);
