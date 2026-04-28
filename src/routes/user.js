const { Register, Login, Logout, refreshAccessToken } = require('../controllers/authControllers');
const { ToolboxElements, createTemplate, addSection, updateSection, reorderSections, updateTemplateName, getAllTemplates, deleteTemplate, getTemplateSections, deleteSection, duplicateSection } = require('../controllers/adminControllers');
const { createPage, getPages, updatePage, deletePage, getSectionsByPage, getPageBySlug } = require('../controllers/pageControllers');
const { getCollections, createCollection, getCollectionItems, addCollectionItem, deleteCollectionItem, bindSectionToCollection } = require('../controllers/collectionControllers');
const { upload, uploadImage, getImages } = require('../controllers/imageControllers');
const db = require('../database/config');
const express = require('express');
const authMiddleware = require('../middleware/jwtAuthMiddleware');

const router = express.Router();

//apply auth middleware---todo

//to remove
router.get('/', async (req, res) => {  
    try {
        const result = await db.query('SELECT * FROM users'); 
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

router.post('/register', Register);
router.post('/login', Login);
router.post('/logout', Logout);
router.post('/refresh', refreshAccessToken);
router.get('/elementstoolbox',ToolboxElements);
router.post('/createtemplate', createTemplate);
router.post('/addSection',addSection);
router.put('/updateSection', updateSection);
router.post('/reorderSections', reorderSections);
router.put('/updateTemplateName', updateTemplateName);
router.get('/getAllTemplates', getAllTemplates);
router.delete('/deleteTemplate/:id', deleteTemplate);
router.get('/getTemplateSections/:id', getTemplateSections);
router.post('/addPage', createPage);
router.get('/getPages/:templateId', getPages);
router.put('/updatePage/:id', updatePage);
router.delete('/deletePage/:id', deletePage);
router.get('/getSectionsByPage/:pageId', getSectionsByPage);
router.get('/getPageBySlug/:templateId/:slug', getPageBySlug);
router.delete('/deleteSection/:id', deleteSection);
router.post('/duplicateSection/:id', duplicateSection);
router.get('/getCollections', getCollections);
router.post('/createCollection', createCollection);
router.get('/getCollectionItems/:id', getCollectionItems);
router.post('/addCollectionItem', addCollectionItem);
router.delete('/deleteCollectionItem/:id', deleteCollectionItem);
router.post('/bindSectionToCollection', bindSectionToCollection);
router.post('/uploadImage', upload.single('image'), uploadImage);
router.get('/getImages', getImages);

module.exports = router;